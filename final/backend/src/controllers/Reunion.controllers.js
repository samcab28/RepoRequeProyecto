const Reunion = require('../models/ReunionModel');

const reunionCtrl = {};

reunionCtrl.getReuniones = async (req, res) => {
    try {
        const reuniones = await Reunion.find();
        res.json(reuniones);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get meetings', error: error.message });
    }
};

reunionCtrl.getReunionById = async (req, res) => {
    const { id } = req.params;

    try {
        const reunion = await Reunion.findById(id);
        if (!reunion) {
            return res.status(404).json({ message: 'Meeting not found' });
        }
        res.json(reunion);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get meeting', error: error.message });
    }
};

reunionCtrl.createReunion = async (req, res) => {
    const { proyecto, tema, medio, colaboradores } = req.body;
    const newReunion = new Reunion({ proyecto, tema, medio, colaboradores });

    try {
        await newReunion.save();
        res.json({ message: 'Meeting created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create meeting', error: error.message });
    }
};

reunionCtrl.deleteReunion = async (req, res) => {
    const { id } = req.params;

    try {
        const reunion = await Reunion.findByIdAndDelete(id);
        if (!reunion) {
            return res.status(404).json({ message: 'Meeting not found' });
        }
        res.json({ message: 'Meeting deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete meeting', error: error.message });
    }
};

reunionCtrl.updateReunion = async (req, res) => {
    const { id } = req.params;
    const { proyecto, tema, medio, colaboradores } = req.body;

    try {
        const updatedReunion = await Reunion.findByIdAndUpdate(id, { proyecto, tema, medio, colaboradores }, { new: true });
        if (!updatedReunion) {
            return res.status(404).json({ message: 'Meeting not found' });
        }
        res.json({ message: 'Meeting updated successfully', reunion: updatedReunion });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update meeting', error: error.message });
    }
};

module.exports = reunionCtrl;
