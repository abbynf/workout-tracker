// Holds schema for the workout documents
// Additional fields will be created by Mongoose as they are inserted

// DEPENDENCIES
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutChildSchema = new Schema({
    type: String,
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
    exercises: [WorkoutChildSchema],
    totalDuration: {
        type: Number,
        default: 0
    }
});
WorkoutSchema.methods.addAll = function() {
    var totalMinutes = 0;
    for (i = 0; i < this.exercises.length; i++) {
        totalMinutes += this.exercises[i].duration;
    }
    return totalMinutes;
}


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
