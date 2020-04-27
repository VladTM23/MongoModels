const mongoose = require('mongoose');

const jobSchema = require('../schemas/jobSchema');
const {employingUser} = require('./userModel');

const Job = mongoose.model("Job",jobSchema);

const newJob = new Job({
    jobOwner: employingUser,
    jobName: "Private Accounting",
    jobDescription: "Work, work, work!!!",
    jobCategory: "Accounting",
    estimatedBudget: "$2000",
    startDate: "2020-05-01",
    completionDateExpected: "2020-09-01",
    requiredSkills: ["Good at accounting"],
    jobDifficulty: 4,
    jobCountry: "Brazil",
    jobCity: "Porto Alegre",
    jobAdress: "Favela, Nr. 33"
});

module.exports = newJob;