// Holds schema for the resistance documents

// DEPENDENCIES
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResistanceChildSchema = new Schema({
    typeOfExercise: {
        type: String,
        default: "resistance"
    },
    name: {
        type: String,
        trim: true,
        required: "Exercise name is required"
    },
    duration: {
        type: Number,
        required: "Duration is required"
    },
    weight: {
        type: Number,
        required: "Weight is required"
    },
    reps: {
        type: Number,
        required: "Number of reps is required"
    },
    sets: {
        type: Number,
        required: "Number of sets is required"
    }
});

const ResistanceSchema = new Schema({
    dateCreated: {
        type: Date,
        default: Date.now
    },
    // MAY NOT WORK IN ARRAY
    exercises: [ResistanceChildSchema]
});

const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Resistance;
