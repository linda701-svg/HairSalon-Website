const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

const authUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            role: user.role,
            token: generateToken(user._id),
        });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
};

const registerUser = async (req, res) => {
    console.log('--- Register User Start ---');
    console.log('Received payload:', req.body);
    const { name, email, password, phone, role } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        console.log('User already exists:', email);
        res.status(400).json({ message: 'User already exists' });
        return;
    }

    const selectedRole = role ? role.trim() : 'Customer';
    const isAdmin = selectedRole === 'Admin';

    console.log('Saving user with:', { selectedRole, isAdmin });

    const user = await User.create({
        name,
        email,
        password,
        phone,
        role: selectedRole,
        isAdmin: isAdmin,
    });

    if (user) {
        console.log('User saved successfully:', { id: user._id, role: user.role, isAdmin: user.isAdmin });
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            role: user.role,
            token: generateToken(user._id),
        });
    } else {
        console.log('User storage failed');
        res.status(400).json({ message: 'Invalid user data' });
    }
};

const getUserProfile = async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            role: user.role,
        });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

const getUsers = async (req, res) => {
    const users = await User.find({});
    res.json(users);
};

const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (user) {
            await User.findByIdAndDelete(req.params.id);
            res.json({ message: 'User removed' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { authUser, registerUser, getUserProfile, getUsers, deleteUser };
