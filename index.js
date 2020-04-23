const mongoose = require('mongoose');

const userSchema = require('./schemas/userSchema');
const handyManSchema = require('./schemas/handyManSchema');
const reviewSchema = require('./schemas/reviewSchema');
const jobSchema = require('./schemas/jobSchema');

mongoose.connect('mongodb://localhost:27017/handyManDB',
                {useNewUrlParser: true, useUnifiedTopology: true});

const User = mongoose.model("User", userSchema);
const HandyMan = mongoose.model("HandyMan", handyManSchema);
const Review = mongoose.model("Review", reviewSchema);
const Job = mongoose.model("Job",jobSchema);

const newReview = new Review({
    ratingScore: 5,
    jobCompleted: true,
    jobCompletedOnTime: true,
    commentReview: "Outstanding job"
});

const workingUser = new User({
    firstName: "John",
    lastName: "Doe",
    email: "maximus@gmail.com",
    phone: "+40729381379",
    gender: "male",
    birthDate: "1972-12-09",
    userName: "JohnDoeTheGardener",
    password: "61e0625d5fb4810762d61a4147641b427847d4c7da0322ba48a4bfbba5d8945e",
    handyManId: "cG9ydG9jYWxh",
});

const employingUser = new User({
    firstName: "Warren",
    lastName: "Buffett Jr.",
    email: "wb@gmail.com",
    phone: "+40729351342",
    gender: "male",
    birthDate: "1985-11-07",
    userName: "WarrenBuff",
    password: "61e0625d5fb4810762d61a4147641b427847d4c7da0322ba48a4bfbba5d8945e",
    clientId: "cG9ydG9jYWxh",
});

const newHandyMan = new HandyMan({
    info: workingUser,
    areaOfInterest: ["Gardening", "Plumbing"],
    topFiveSkills: ["Punctual","Realistic","Professional","Trustworthy","Experienced"],
    spokenLanguages: ["English","Romanian"],
    country: "Romania",
    city: "Timisoara",
    address: "Str. Bla, nr. 17 bis",
    reviews: newReview
})

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
})

//Run these once and then comment them to avoid duplication

newReview.save();
workingUser.save();
employingUser.save();
newHandyMan.save();
newJob.save();

