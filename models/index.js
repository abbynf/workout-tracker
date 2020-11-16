// Holds schema for the workout documents
// Additional fields will be created by Mongoose as they are inserted

// DEPENDENCIES
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutsChildSchema = new Schema({
    typeOfExercise: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
});

const WorkoutsSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    // MAY NOT WORK IN ARRAY
    exercises: [WorkoutsChildSchema]
});

const Workouts = mongoose.model("Workouts", WorkoutsSchema);

module.exports = Workouts;
