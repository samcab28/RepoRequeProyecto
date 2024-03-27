const Colaborador = require('../models/ColaboradorModel');

const colaboradorCtrl = {};

colaboradorCtrl.getColaboradores = async (req, res) => {
    try {
        const colaboradores = await Colaborador.find();
        res.json(colaboradores);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get colaboradores', error: error.message });
    }
};

colaboradorCtrl.getColaboradorById = async (req, res) => {
    const { id } = req.params;

    try {
        const colaborador = await Colaborador.findById(id);
        if (!colaborador) {
            return res.status(404).json({ message: 'Colaborador not found' });
        }
        res.json(colaborador);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get colaborador', error: error.message });
    }
};

colaboradorCtrl.createColaborador = async (req, res) => {
    const { nombre, cedula, correo,password, departamento, telefono, estado } = req.body;
    const newColaborador = new Colaborador({ nombre, cedula, correo, password,departamento, telefono, estado });

    try {
        await newColaborador.save();
        res.json({ message: 'Colaborador created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create colaborador', error: error.message });
    }
};

colaboradorCtrl.deleteColaborador = async (req, res) => {
    const { id } = req.params;

    try {
        const colaborador = await Colaborador.findByIdAndDelete(id);
        if (!colaborador) {
            return res.status(404).json({ message: 'Colaborador not found' });
        }
        res.json({ message: 'Colaborador deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete colaborador', error: error.message });
    }
};

colaboradorCtrl.updateColaborador = async (req, res) => {
    const { id } = req.params;
    const { nombre, cedula, correo, password,departamento, telefono, estado } = req.body;

    try {
        const updatedColaborador = await Colaborador.findByIdAndUpdate(id, { nombre, cedula, correo,password, departamento, telefono, estado }, { new: true });
        if (!updatedColaborador) {
            return res.status(404).json({ message: 'Colaborador not found' });
        }
        res.json({ message: 'Colaborador updated successfully', colaborador: updatedColaborador });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update colaborador', error: error.message });
    }
};

module.exports = colaboradorCtrl;
