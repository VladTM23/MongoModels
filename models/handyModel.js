const mongoose = require('mongoose');

const handyManSchema = require('../schemas/handyManSchema');

const {newReview} = require('./reviewModel');
const {workingUser} = require('./userModel');

const HandyMan = mongoose.model("HandyMan", handyManSchema);

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

module.exports = newHandyMan;