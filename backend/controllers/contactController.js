const Contact = require('../models/contactModel');

const submitInquiry = async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
        res.status(400).json({ message: 'Please provide name, email, and message' });
        return;
    }

    const inquiry = new Contact({
        name,
        email,
        phone,
        subject,
        message,
    });

    const createdInquiry = await inquiry.save();
    res.status(201).json(createdInquiry);
};

const getInquiries = async (req, res) => {
    const inquiries = await Contact.find({}).sort({ createdAt: -1 });
    res.json(inquiries);
};

const deleteInquiry = async (req, res) => {
    try {
        const inquiry = await Contact.findById(req.params.id);

        if (inquiry) {
            await Contact.findByIdAndDelete(req.params.id);
            res.json({ message: 'Inquiry removed' });
        } else {
            res.status(404).json({ message: 'Inquiry not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { submitInquiry, getInquiries, deleteInquiry };
