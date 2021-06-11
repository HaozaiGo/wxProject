/*
 * @Author: your name
 * @Date: 2021-06-11 09:36:40
 * @LastEditTime: 2021-06-11 13:37:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-back\util\uploadIMG2.js
 */
const formatTime = require('silly-datetime'); //格式化时间字符串
import path from 'path';
import config from '../config/config';


let time = formatTime.format(new Date(), 'YYYYMMDDHHmmss');
let num = Math.floor(Math.random() * 1000 + 1000);
var imageFinalName = `${time}_${num}.png`;

/**
 * @description: 
 * @param {*} formidable
 * @return {*}
 */
let newPath = function(){
    let uploadDir = path.join(__dirname, config.upLoadPath) //设置上传文件临时存放位置
    return uploadDir + '/' + imageFinalName;
}



export { newPath, imageFinalName }
