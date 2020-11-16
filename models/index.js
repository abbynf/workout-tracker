// Holds schema for the workout documents
// Additional fields will be created by Mongoose as they are inserted

// DEPENDENCIES
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutChildSchema = new Schema({
    typeOfExercise: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
});

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    // MAY NOT WORK IN ARRAY
    exercises: [WorkoutChildSchema]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
