const db = require("../models");
const connection = require("../server");

// Load User model
const User = require("../models/user");

module.exports = {
    create: (req, res) => {
        console.log(req.body)
        User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            userName: req.body.userName,
            password: req.body.password,
            preferences: req.body.preferences || {}
        }).then(dbRes => {
            console.log("it worked")
            res.json(dbRes)
        });
    }
    // createUser: function(){
    //     connection.query("INSERT INTO userData(email, username, firstName, lastName) VALUES (" + email + ", " + username + ", " + firstName + ", " + lastName + ")");
    // },
    // updateUserData: function(){
    //     connection.query("INSERT INTO userData(username, charityScore, charityMatch) VALUES(" + username + ", " + charityScore + ", " + charityMatch + ")");
    // }
}