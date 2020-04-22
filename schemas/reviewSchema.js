const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/handyManDB',
                {useNewUrlParser: true, useUnifiedTopology: true});


const reviewSchema = new mongoose.Schema({
        ratingScore : {
            type: Number,
            min: 1,
            max: 5,
            required: true
        },
        jobCompleted: { 
            type: Boolean,
            required: true
        },
        jobCompletedOnTime: { 
            type: Boolean,
            required: true
        },
        commentReview: String
});

module.exports = reviewSchema;