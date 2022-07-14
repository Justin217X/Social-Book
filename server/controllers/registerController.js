const usersDB = {
    users: require('../model/User.json'),
    setUsers: function(data) { this.users = data}
}
const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and Password are required.' });
    //check for duplicate usernames in db
    const duplicate = usersDB.users.find(person => person.username === user);
    if (duplicate) return res.sendStatus(409); //Conflict status code
    try {
        const hashedPwd = await bcrypt.hash(pwd, 10);
        //store the new user
        const newUser = { "username": user, "password": hashedPwd };
        usersDB.setUsers([...usersDB.users, newUser]);
        await fsPromises.writeFile(
            path.join(__dirname, '..', 'model', 'User.json'),
            JSON.stringify(usersDB.users)
        );
        console.log(usersDB.users);
        res.status(201).json({ 'success': `New user ${user} created!` })
    } catch {
        res.status(500).json({ 'message': err.message })
    }

}

module.exports = { handleNewUser }