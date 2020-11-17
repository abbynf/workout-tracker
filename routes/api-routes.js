// These routes interact with the database

// DEPENDENCIES
const Workout = require("./../models");
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

    app.post("/api/workouts", function (req, res) {
        console.log(req.body);
        console.log("post api/workouts hit");

        // create empty workout day
        Workouts.create({})
            .then(function (result) {
                console.log(result);

                // Send back the workout that was created
                res.send(result);
            })
    });

    app.put("/api/workouts/:id", function (req, res) {
        console.log("PUT /api/workouts hit");
        id = req.params.id;
        var addDuration = req.body.duration;
        var currentDuration;
        Workouts.findById(id).then(function (lastWorkout) {
            currentDuration = lastWorkout.totalDuration;
            var newDuration = currentDuration + addDuration;
            lastWorkout.totalDuration = newDuration
            lastWorkout.exercises.push(req.body);
            return lastWorkout
        }).then(function(pushedWorkout) {
            pushedWorkout.save();
            console.log("finished")
            res.send(pushedWorkout);
        })
    });

    app.get("/api/workouts/range", function(req, res) {
        Workouts.find({})
            .then(function(allWorkouts) {
                res.send(allWorkouts);
            })
    })
}