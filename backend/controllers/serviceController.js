const Service = require('../models/serviceModel');

const getServices = async (req, res) => {
    const services = await Service.find({});
    res.json(services);
};

const getServiceById = async (req, res) => {
    const service = await Service.findById(req.params.id);

    if (service) {
        res.json(service);
    } else {
        res.status(404).json({ message: 'Service not found' });
    }
};

const createService = async (req, res) => {
    const { title, description, price, duration, image, category } = req.body;

    const service = new Service({
        title,
        description,
        price,
        duration,
        image,
        category,
    });

    const createdService = await service.save();
    res.status(201).json(createdService);
};

const updateService = async (req, res) => {
    const { title, description, price, duration, image, category } = req.body;

    const service = await Service.findById(req.params.id);

    if (service) {
        service.title = title;
        service.description = description;
        service.price = price;
        service.duration = duration;
        service.image = image;
        service.category = category;

        const updatedService = await service.save();
        res.json(updatedService);
    } else {
        res.status(404).json({ message: 'Service not found' });
    }
};

const deleteService = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);

        if (service) {
            await Service.findByIdAndDelete(req.params.id);
            res.json({ message: 'Service removed' });
        } else {
            res.status(404).json({ message: 'Service not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getServices, getServiceById, createService, updateService, deleteService };
