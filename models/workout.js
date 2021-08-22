const mongoose = require("mongoose");

const Schema = mongoose.Schema; 

const trackerSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    }
})