const mongoose = require('mongoose');
const userSchema = require('../schemas/userSchema');

const User = mongoose.model("User", userSchema);

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

module.exports = {
    workingUser,
    employingUser
};