// Holds schema for the cardio documents

// DEPENDENCIES
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardioChildSchema = new Schema({
    typeOfExercise: {
        type: String,
        default: "cardio"
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
    distance: {
        type: Number,
        required: "Distance is required"
    }
});

const CardioSchema = new Schema({
    dateCreated: {
        type: Date,
        default: Date.now
    },
    // MAY NOT WORK IN ARRAY
    exercises: [CardioChildSchema]
});

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;
