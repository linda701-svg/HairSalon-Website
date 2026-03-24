const mongoose = require('mongoose');

const stylistSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
    specialties: [{
        type: String,
    }],
    image: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
}, {
    timestamps: true,
});

const Stylist = mongoose.model('Stylist', stylistSchema);

module.exports = Stylist;
