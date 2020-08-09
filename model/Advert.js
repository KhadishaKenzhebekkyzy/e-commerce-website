const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdvertSchema = new Schema({
    userID: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    volume: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    delivery: {
        type: String,
        required: true
    },
    elevator: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    occupation:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    middleName:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    archived: {
        type: Boolean,
        default: false
    },
    timestamp: {
         type: Date, 
         default: Date.now
        },
    images: {
        type: [String]
       
    }

})
module.exports = mongoose.model('Advert', AdvertSchema); 