

/*
 * @Author: your name
 * @Date: 2021-06-09 15:18:02
 * @LastEditTime: 2021-06-11 14:43:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-back\start.js
 */
require("babel-polyfill");
require('@babel/plugin-transform-runtime')
require('babel-register')({
    presets:['env']
})

module.exports = require('./index')