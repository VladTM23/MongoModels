const mongoose = require('mongoose');
const newReview = require('./models/reviewModel');
const {workingUser, employingUser} = require('./models/userModel');
const newHandyMan = require('./models/handyModel');
const newJob = require('./models/jobModel');

mongoose.connect('mongodb://localhost:27017/handyManDB',
                {useNewUrlParser: true, useUnifiedTopology: true})
                .then(() => {
                    console.log("Connection estabilished with DB");
                   })
               .catch( err  => console.log(err));

const saving = async () => {
    const savedReview = await newReview.save();
    // console.log(savedReview);

    const savedFirstUser = await workingUser.save();
    // console.log(savedFirstUser);

    const savedSecondUser = await employingUser.save();
    // console.log(savedSecondUser);

    const savedHandyMan = await newHandyMan.save();
    // console.log(savedHandyMan);

    const savedJob = await newJob.save();
    // console.log(savedJob);
};

saving().then( () => {
        console.log("\nAll got saved \nClosing connection...bye");
        mongoose.connection.close();
        });


