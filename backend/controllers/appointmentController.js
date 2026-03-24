const Appointment = require('../models/appointmentModel');

const addAppointmentItems = async (req, res) => {
    const { service, stylist, date, name, email, phoneno, location, city } = req.body;

    console.log('Incoming appointment data:', req.body);
    console.log('User requesting appointment:', req.user);

    if (!service || !stylist || !date) {
        res.status(400);
        throw new Error('Please provide service, stylist and date');
        return;
    } else {
        const appointment = new Appointment({
            user: req.user._id,
            service,
            stylist,
            date,
            name: name || req.user.name,
            email: email || req.user.email,
            phoneno: phoneno || req.user.phone,
            location,
            city,
        });

        const createdAppointment = await appointment.save();

        res.status(201).json(createdAppointment);
    }
};

const getAppointmentById = async (req, res) => {
    const appointment = await Appointment.findById(req.params.id).populate(
        'user',
        'name email'
    ).populate('service').populate('stylist');

    if (appointment) {
        res.json(appointment);
    } else {
        res.status(404);
        throw new Error('Appointment not found');
    }
};

const getMyAppointments = async (req, res) => {
    const appointments = await Appointment.find({ user: req.user._id }).populate('service').populate('stylist');
    res.json(appointments);
};

const getAppointments = async (req, res) => {
    const appointments = await Appointment.find({})
        .populate('user', 'id name email phone')
        .populate('service', 'title price')
        .populate('stylist', 'name');
    res.json(appointments);
};

const updateAppointmentStatus = async (req, res) => {
    const appointment = await Appointment.findById(req.params.id);

    if (appointment) {
        appointment.status = req.body.status || appointment.status;
        const updatedAppointment = await appointment.save();
        res.json(updatedAppointment);
    } else {
        res.status(404);
        throw new Error('Appointment not found');
    }
};

const deleteAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndDelete(req.params.id);

        if (appointment) {
            res.json({ message: 'Appointment removed' });
        } else {
            res.status(404);
            throw new Error('Appointment not found');
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    addAppointmentItems,
    getAppointmentById,
    getMyAppointments,
    getAppointments,
    updateAppointmentStatus,
    deleteAppointment
};
