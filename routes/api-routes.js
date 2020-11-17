// These routes interact with the database

// DEPENDENCIES
const Workouts = require("./../models");

module.exports = function (app) {

    app.get("/api/workouts", function (req, res) {
        console.log("GET api/workouts hit");
        Workouts.find({})
            .then(dbWorkout => {
                console.log(dbWorkout)
                res.json(dbWorkout)
            })
            .catch(err => {
                res.json(err)
            })
    });

    app.post("/api/workouts", function(req, res) {
        console.log(req.body);
        console.log("post api/workouts hit");

        // create empty workout day
        Workouts.create({})
            .then(function(result) {
                console.log(result);

                // Send back the workout that was created
                res.send(result);
            })
    })
}