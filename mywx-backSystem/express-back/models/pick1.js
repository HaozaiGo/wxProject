const mongoose = require('mongoose');

const pick1Model = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    Name: {
        type: Array
    },
    description: {
        type: Array
    },
    Tags: {
        type: Array
    }
})

module.exports = mongoose.model('pick1', pick1Model)