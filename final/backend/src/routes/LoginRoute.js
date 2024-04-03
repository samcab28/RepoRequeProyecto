const { Router } = require('express');
const router = Router();

<<<<<<< Updated upstream
const { loginAdmin, loginColab, isAdmin } = require('../controllers/Login.controllers');
=======
const { loginAdmin, loginColab, isAdmin, getId } = require('../controllers/Login.controllers');
>>>>>>> Stashed changes

router.route('/')
    .post(async (req, res) => {
        try {
            // Espera a que se resuelva la promesa y obtiene el resultado
            const isAdminResult = await isAdmin(req, res);

            // Verifica el valor booleano dentro del resultado
            if (isAdminResult) {
                // Si isAdmin es true, llama a loginAdmin
                const loginResult = await loginAdmin(req, res);
<<<<<<< Updated upstream
                //console.log('loginResult', loginResult);
                res.json(loginResult)
=======
                if (loginResult) {
                    // Si el login como administrador tiene éxito, obtén el ID del usuario administrador
                    const userId = await getId(req, res);
                    loginResult.userId = userId; // Agrega el ID del usuario a los resultados del login
                }
                res.json(loginResult);
>>>>>>> Stashed changes
            } else {
                // Si isAdmin es false, llama a loginColabs
                const loginResult = await loginColab(req, res);
<<<<<<< Updated upstream
                res.json(loginResult)
=======
                if (loginResult) {
                    // Si el login como administrador tiene éxito, obtén el ID del usuario colaborador
                    const userId = await getId(req, res);
                    loginResult.userId = userId; // Agrega el ID del usuario a los resultados del login
                }
                res.json(loginResult);
>>>>>>> Stashed changes
            }
        } catch (error) {
            console.error('Error al verificar el usuario', error);
            res.status(500).json({ message: 'Error al verificar el usuario' });
        }
});

module.exports = router;
