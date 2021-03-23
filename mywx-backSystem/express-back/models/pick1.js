const mongoose = require('mongoose');
const pick1Model = new mongoose.Schema({
    username: {
        type: String,
        required:true,
    },
    pick1List: {
        type: Array,
        key:{
            type:Number
        },
        Name: {
            type: String
        },
        description: {
            type: String
        },
        Tags: {
            type: Array
        }
    },

})

module.exports = mongoose.model('pick1', pick1Model)