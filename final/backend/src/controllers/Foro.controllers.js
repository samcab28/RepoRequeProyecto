const Foro = require('../models/ForoModel');
const adminCtrl = require('../models/AdminModel');
const colaboradorCtrl = require('../models/ColaboradorModel');
const foroCtrl = {};

foroCtrl.getForos = async (req, res) => {
    try {
        const foros = await Foro.find();
        res.json(foros);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get foros', error: error.message });
    }
};



foroCtrl.createForo = async (req, res) => {
    const { proyecto, mensaje, colaboradores } = req.body;
    const newForo = new Foro({ proyecto, mensaje, colaboradores });

    try {
        await newForo.save();
        res.json({ message: 'Foro creado exitosamente' });
    } catch (error) {
        if (error.name === 'AxiosError') {
            return res.status(400).json({ message: 'ID de proyecto no válido' });
        }
        res.status(500).json({ message: 'Error al crear el foro', error: error.message });
    }
};
//----------------------------------------------
foroCtrl.getColaboradoresYAdminsIds = async (req, res) => {
    try {
        const colaboradorIds = await colaboradorCtrl.getColaboradorIds();
        const adminIds = await adminCtrl.getAdminIds();
        const idsUnificados = colaboradorIds.concat(adminIds);
        res.json(idsUnificados);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get colaboradores and admins IDs', error: error.message });
    }
};
//----------------------------------------------
module.exports = foroCtrl;