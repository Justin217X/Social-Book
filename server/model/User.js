const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    // display_name: {type: String, minLength: 3, maxLength: 250, required: true},
    username: {type: String, minLength: 3, maxLength: 100, required: true, unique: true},
    password: {type: String, minLength: 4, maxLength: 100, required: true},
    refreshToken: [{type: String}],
    
});

// mongoose.model("User", UserSchema)

module.exports = mongoose.model('User', UserSchema);