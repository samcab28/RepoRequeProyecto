const Proyecto = require('../models/ProyectoModel');

const proyectoCtrl = {};

proyectoCtrl.getProyectos = async (req, res) => {
    try {
        const proyectos = await Proyecto.find();
        res.json(proyectos);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get projects', error: error.message });
    }
};

proyectoCtrl.getProyectoById = async (req, res) => {
    const { id } = req.params;

    try {
        const proyecto = await Proyecto.findById(id);
        if (!proyecto) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(proyecto);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get project', error: error.message });
    }
};

proyectoCtrl.createProyecto = async (req, res) => {
    const { nombre, recursos, presupuesto, colaboradores, tareas, estado, descripcion, fecha_inicio, responsable } = req.body;
    const newProyecto = new Proyecto({ nombre, recursos, presupuesto, colaboradores, tareas, estado, descripcion, fecha_inicio, responsable });

    try {
        await newProyecto.save();
        res.json({ message: 'Project created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create project', error: error.message });
    }
};

proyectoCtrl.deleteProyecto = async (req, res) => {
    const { id } = req.params;

    try {
        const proyecto = await Proyecto.findByIdAndDelete(id);
        if (!proyecto) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete project', error: error.message });
    }
};

proyectoCtrl.updateProyecto = async (req, res) => {
    const { id } = req.params;
    const { nombre, recursos, presupuesto, colaboradores, tareas, estado, descripcion, fecha_inicio, responsable } = req.body;

    try {
        const updatedProyecto = await Proyecto.findByIdAndUpdate(id, { nombre, recursos, presupuesto, colaboradores, tareas, estado, descripcion, fecha_inicio, responsable }, { new: true });
        if (!updatedProyecto) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json({ message: 'Project updated successfully', proyecto: updatedProyecto });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update project', error: error.message });
    }
};

module.exports = proyectoCtrl;
