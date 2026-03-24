const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    service: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Service',
    },
    stylist: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Stylist',
    },
    date: {
        type: Date,
        required: true,
    },
    name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    phoneno: {
        type: String,
        trim: true,
    },
    location: {
        type: String,
        trim: true,
    },
    city: {
        type: String,
        trim: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'],
        default: 'Pending',
    },
}, {
    timestamps: true,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
