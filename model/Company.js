const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    userID: {
        type: String,
        // required: true
    },
    title: {
        type: String,
        // required: true
    },
    occupation: {
        type: String,
        // required: true
    },
    elevator: {
        type: String,
        // required: true
    },
    address:{
        type: String,
        // required: true
    },
    lastName:{
        type: String,
        // required: true
    },
    firstName:{
        type: String,
        // required: true
    },
    middleName:{
        type: String,
        // required: true
    },
    phoneNumber:{
        type: String,
        // required: true
    },
    timestamp: {
         type: Date, 
         default: Date.now
        },
    images: {
        type: [String]
       
    }

})
module.exports = mongoose.model('Company', CompanySchema); 