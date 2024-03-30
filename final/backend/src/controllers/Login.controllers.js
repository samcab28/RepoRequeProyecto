const AdminModel = require('../models/AdminModel');
const ColabModel = require('../models/ColaboradorModel');


const LoginCtrl = {};

LoginCtrl.isAdmin = async (req, res) => {
    const { nombre } = req.body; // Suponiendo que el nombre de usuario se envía en el cuerpo de la solicitud

    try {
        // Verificar si el usuario específico es un administrador
        const admin = await AdminModel.findOne({ nombre });
        // Devolver true si se encuentra el administrador, false si no
        const isAdmin = admin;
        
        // Verifica el valor de isAdmin y llama a la función de autenticación correspondiente
        if (isAdmin) {
            return true 
        } else {
            return false 
        }
    } catch (error) {
        console.error('Error al verificar si el usuario es admin:', error);
        res.status(500).json({ message: 'Error al verificar si el usuario es admin' });
    }
};

LoginCtrl.loginAdmin = async (req, res) => {
    const { nombre, password } = req.body;

    try {
        const admin = await AdminModel.findOne({ nombre }); 
        if (admin && admin.password === password) {
            const data = {
                nombre: admin.nombre,
                password: admin.password,
                role: 'admin'
            };
            // Devolver la información como respuesta JSON
            return data;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error en el login de administrador:', error);
        return null;
    }
};

LoginCtrl.loginColab = async (req, res) => {
    const { nombre, password } = req.body;

    try {
        const colab = await ColabModel.findOne({ nombre }); 
        if (colab && colab.password === password) {
            const data = {
                nombre: colab.nombre,
                password: colab.password,
                role: 'usuario'
            };
            // Devolver la información como respuesta JSON
            return data; 
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error en el login de colaborador:', error);
        return null;
    }
};

module.exports = LoginCtrl;