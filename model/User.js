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
    },
    lastName: {
        type: String,
    },
    firstName : {
        type: String,
    },
    growersID: {
        type: String,
    },
    middleName: {
        type: String,
    },
    city: {
        type: String,
    },
    street: {
        type: String,
    },
    profileImage: {
        type: String,

    }, 
    organisationPhone: {
        type: String,
    },
    country: {
        type: String,
    }

});

module.exports = mongoose.model('User', UserSchema); 