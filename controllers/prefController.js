const db = require("../models");
const connection = require("../server");

// Load User model
const Preferences = require("../models/Preferences");

module.exports = {
    create: (req, res) => {
        console.log(req.body)
        Preferences.create({
            question1: req.body.question1,
            question2: req.body.question2,
            question3: req.body.question3,
            question4: req.body.question4,
        }).then(dbRes => {
            console.log("pref's worked")
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