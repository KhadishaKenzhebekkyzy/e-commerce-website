const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubscriptionSchema = new Schema({
    userID: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    status: {
        type: String,
         required: true
    },
    price:{
        type: String,
        required: true
    },
    
    activeDue:{
        type: String,
        
    },
    timestamp: {
         type: Date, 
         default: Date.now
        },
    type: {
        type: String,
    }

})
module.exports = mongoose.model('Subscirption', SubscriptionSchema); 