const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/handyManDB',
                {useNewUrlParser: true, useUnifiedTopology: true});

 const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
    ,
    gender: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    }, 
    handyManId:  String,
    clientId: String,
    employedHandyMen: [String],
    //Could be handyManId's
});               

module.exports = userSchema;