const mongoose = require('mongoose');
const userSchema = require('./userSchema');
const handyManSchema = require('./handyManSchema');

const jobSchema = new mongoose.Schema({
    jobOwner: {
        type: [userSchema],
        required: true 
    },
    jobName: {
        type: String,
        required: true 
    },
    jobDescription: {
        type: String,
        required: true 
    },
    jobCategory: {
        type: String,
        required: true
    },
    estimatedBudget: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    completionDateExpected: {
        type: Date,
        required: true
    },
    requiredSkills: {
        type: [String],
        required: true
    },
    jobDifficulty: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    jobCountry: {
        type: String, 
        required: true
    },
    jobCity: {
        type: String, 
        required: true
    },
    jobAdress: {
        type: String, 
        required: true
    },
    enlistedHandyMen: [handyManSchema],
    jobComments: {
        title: String,
        postBody: String
    }
    //Could only have handyManId's instead of entire schema
});

module.exports = jobSchema;