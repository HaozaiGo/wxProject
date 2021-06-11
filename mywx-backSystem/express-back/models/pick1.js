/*
 * @Author: your name
 * @Date: 2021-04-27 09:49:15
 * @LastEditTime: 2021-06-11 16:25:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-back\models\pick1.js
 */
const mongoose = require('mongoose');


const pick2Schema = new mongoose.Schema({
    item_id: { type: Number, isRequired: true },
    key: {
        type: Number,
    },
    img: {
        type: String
    },
    description: {
        type: String
    },
    username: {
        type: String
    }
})

// pick1
const pick1Model = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    pick1List: {
        type: Array,
        key: {
            type: Number
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
    pick2List: [pick2Schema],

})

// pick3
const pick3Model = new mongoose.Schema({
    // _id: { type: Number, require: true },
    title: String,
    img: String,
    description: String,
    username: String

})
pick3Model.index({ _id: 1 })


const pick1 = mongoose.model('pick1', pick1Model)

const pick2 = mongoose.model('pick2', pick2Schema)

const pick3 = mongoose.model('pick3',pick3Model)

export { pick2, pick1, pick3 }