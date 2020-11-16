// These routes interact with the database

// DEPENDENCIES
const Workouts = require("./../models");

var entry;

module.exports = function (app) {

    app.get("/api/workouts", function (req, res) {
        console.log("api/workouts hit");
        Workouts.find({})
            .then(dbWorkout => {
                console.log(dbWorkout)
                res.json(dbWorkout)
            })
            .catch(err => {
                res.json(err)
            })
    });
}