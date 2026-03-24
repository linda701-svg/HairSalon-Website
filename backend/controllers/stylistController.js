const Stylist = require('../models/stylistModel');

const getStylists = async (req, res) => {
    const stylists = await Stylist.find({});
    res.json(stylists);
};

const createStylist = async (req, res) => {
    const { name, bio, specialties, image } = req.body;

    const stylist = new Stylist({
        name,
        bio,
        specialties,
        image,
    });

    const createdStylist = await stylist.save();
    res.status(201).json(createdStylist);
};

const updateStylist = async (req, res) => {
    const { name, bio, specialties, image } = req.body;

    const stylist = await Stylist.findById(req.params.id);

    if (stylist) {
        stylist.name = name || stylist.name;
        stylist.bio = bio || stylist.bio;
        stylist.specialties = specialties || stylist.specialties;
        stylist.image = image || stylist.image;

        const updatedStylist = await stylist.save();
        res.json(updatedStylist);
    } else {
        res.status(404).json({ message: 'Stylist not found' });
    }
};

const deleteStylist = async (req, res) => {
    try {
        const stylist = await Stylist.findById(req.params.id);

        if (stylist) {
            await Stylist.findByIdAndDelete(req.params.id);
            res.json({ message: 'Stylist removed' });
        } else {
            res.status(404).json({ message: 'Stylist not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getStylists, createStylist, updateStylist, deleteStylist };
