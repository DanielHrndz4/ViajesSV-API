const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    }, 
    phoneNumbe:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }, 
});

const User = mongoose.model('Place', UserSchema);

module.exports = User;