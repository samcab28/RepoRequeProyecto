//LoginRoute.js
const { Router } = require('express');
const router = Router();

const { loginAdmin, loginColab, isAdmin } = require('../controllers/Login.controllers');

router.route('/')
    .post(async (req, res) => {
        try {
            // Espera a que se resuelva la promesa y obtiene el resultado
            const isAdminResult = await isAdmin(req, res);

            // Verifica el valor booleano dentro del resultado
            if (isAdminResult) {
                // Si isAdmin es true, llama a loginAdmin
                const loginResult = await loginAdmin(req, res);
                //console.log('loginResult', loginResult);
                res.json(loginResult)
            } else {
                // Si isAdmin es false, llama a loginColabs
                const loginResult = await loginColab(req, res);
                res.json(loginResult)
            }
        } catch (error) {
            console.error('Error al verificar el usuario', error);
            res.status(500).json({ message: 'Error al verificar el usuario' });
        }
});

module.exports = router;
