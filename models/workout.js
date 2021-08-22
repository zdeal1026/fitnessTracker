const mongoose = require("mongoose");

const Schema = mongoose.Schema; 

const trackerSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: true,
            },
            name: {
                type: String,
                trim: true, 
                required: true,
            },
            duration: {
                type: Number,
                required: true,
            },
            weight: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            distance: {
                type: Number,
            },
        },
    ]
})

const trackerSchema = mongoose.model("trackerSchema", workout);

module.exports = trackerSchema