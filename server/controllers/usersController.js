const data = {
    users: require('../model/User.json'),
    setUser: function (data) { this.users = data }
};

const getAllUsers = (req, res) => {
    res.json(data.users);
}

const createNewUser = (req, res) => {
    const newUser = {
        id: data.users[data.users.length - 1].id + 1 || 1,
        username: req.body.username,
        pwd: req.body.pwd
    }

    if (!newUser.username || !newUser.pwd) {
        return res.status(400).json({ 'message': 'Username and Password are required' });
    }

    data.setUser([...data.users, newUser]);
    res.status(201).json(data.users);
}

const updateUser = (req, res) => {
    const user = data.users.find(name => name.id === parseInt(req.body.id));
    if (!user) {
        return res.status(400).json({ 'message': `User ID ${req.body.id} not found` });
    }
    if (req.body.username) user.username = req.body.username;
    if (req.body.pwd) user.pwd = req.body.pwd;
    const filteredArray = data.users.filter(name => name.id !== parseInt(req.body.id));
    const unsortedArray = [...filteredArray, user];
    data.setUser(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    res.json(data.users);
}

const deleteUser = (req, res) => {
    const user = data.users.find(name => name.id === parseInt(req.body.id));
    if (!user) {
        return res.status(400).json({ 'message': `User ID ${req.body.id} not found` });
    }
    const filteredArray = data.users.filter(name => name.id !== parseInt(req.body.id));
    data.setUser([...filteredArray]);
    res.json(data.users);
}

const getUser = (req, res) => {
    const user = data.users.find(name => name.id === parseInt(req.params.id));
    if (!user) {
        return res.status(400).json({ 'message': `User ID ${req.params.id} not found` });
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