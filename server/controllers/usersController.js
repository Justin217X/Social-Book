const User = require('../model/User');

const getAllUsers = async (req, res) => {
    const users = await User.find();
    if (!users) return res.status(204).json({ 'message': 'No users found.' });
    res.json(users);
}

const createNewUser = async (req, res) => {
    if (!req?.body?.username || !req?.body?.password) {
        return res.status(400).json({ 'message': 'Username and Password are required.' });
    }

    try {
        const result = await User.create({
            username: req.body.username,
            password: req.body.password
        })

        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}

const updateUser = async (req, res) => {
    if (!req?.body.id) {
        return res.status(400).json({ 'message': 'ID parameter is required.' });
    }

    const user = await User.findOne({ _id: req.body.id }).exec();
    if (!user) {
        return res.status(204).json({ 'message': `No user matches ID ${req.body.id}.` });
    }
    if (req.body?.username) user.username = req.body.username;
    if (req.body?.password) user.password = req.body.password;
    const result = await user.save();
    res.json(result);
}

const deleteUser = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({ 'message': 'User ID required' });
    const user = await User.findOne({ _id: req.body.id }).exec();
    if (!user) {
        return res.status(204).json({ 'message': `No user matches ID ${req.body.id}.` });
    }
    const result = await user.deleteOne({ _id: req.body.id });
    res.json(result);
}

const getUser = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ 'message': 'User ID required' });

    const user = await User.findOne({ _id: req.params.id }).exec();
    if (!user) {
        return res.status(204).json({ 'message': `No user matches ID ${req.params.id}.` });
    }
    res.json(user);
}

module.exports ={
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
    getUser
}