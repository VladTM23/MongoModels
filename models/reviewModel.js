const mongoose = require('mongoose');
const reviewSchema = require('../schemas/reviewSchema');

const Review = mongoose.model("Review", reviewSchema);

const newReview = new Review({
    ratingScore: 5,
    jobCompleted: true,
    jobCompletedOnTime: true,
    commentReview: "Outstanding job"
});

module.exports = newReview;