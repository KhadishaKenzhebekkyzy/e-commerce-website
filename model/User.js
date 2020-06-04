const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    resetLink: {
        data: String,
    }
});

module.exports = mongoose.model('User', UserSchema);