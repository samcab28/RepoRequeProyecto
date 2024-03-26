const userCtrl = {};
const User = require('../models/UserModel');

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

userCtrl.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new User({ username });

    try {
        await newUser.save();
        res.json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create user', error: error.message });
    }
};

module.exports = userCtrl;
