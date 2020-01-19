import mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
    phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10,
    }
}));

exports.User = User;