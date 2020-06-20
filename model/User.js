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
        //NEED TO FIND THIS OUT

    }

});

module.exports = mongoose.model('User', UserSchema); 