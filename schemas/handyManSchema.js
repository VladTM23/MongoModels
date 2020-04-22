const mongoose = require('mongoose');
const reviewSchema = require('./reviewSchema');
const userSchema = require('./userSchema');

mongoose.connect('mongodb://localhost:27017/handyManDB',
                {useNewUrlParser: true, useUnifiedTopology: true});

const handyManSchema = new mongoose.Schema({
    info: {
        type: [userSchema],
        required: true
    },
    areaOfInterest: { 
        type: [String],
        required: true
    },
    topFiveSkills: {
        type: [String],
        required: true[String]
    },
    spokenLanguages: {
        type: [String],
        required: true
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    companyName: String,
    companyPhone: String,
    companyWebsite: String,
    companyAdress: String, 
    reviews: [reviewSchema]
});               

module.exports = handyManSchema;