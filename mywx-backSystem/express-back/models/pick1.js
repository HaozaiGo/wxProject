/*
 * @Author: your name
 * @Date: 2021-04-27 09:49:15
 * @LastEditTime: 2021-05-12 11:58:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-back\models\pick1.js
 */
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
    pick2List:{
        type:Array,
        img:{
            type:String
        },
        description:{
            type:String
        }
    }

})

module.exports = mongoose.model('pick1', pick1Model)