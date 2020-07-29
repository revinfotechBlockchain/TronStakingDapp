const mongoose = require('mongoose');

var TransformTokens = new mongoose.Schema({
    Day: {
        type: Number,
        required: 'This field is required.'
    },
    RYZAvailable: {
        type: String,
        required: 'This field is required.'
    },
    TotalTRX: {
        type: String,
        required: 'This field is required.'
    },
    RYZTRX: {
        type: String,
        required: 'This field is required.'
    },
    Closing: {
        type: String,
        required: 'This field is required.'
    },
    YourRYZ: {
        type: String,
        required: 'This field is required.'
    },
    YourTRX: {
        type: String,
        required: 'This field is required.'
    }
});

mongoose.model('TransformTokens', TransformTokens);