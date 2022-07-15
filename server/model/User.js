const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    username: {type: String, minLength: 3, maxLength: 100, required: true, unique: true},
    roles: {User: {type: Number, default: 2001}},
    password: {type: String, minLength: 4, maxLength: 100, required: true},
    refreshToken: [{type: String}],
    
});

// mongoose.model("User", UserSchema)

module.exports = mongoose.model('User', UserSchema);