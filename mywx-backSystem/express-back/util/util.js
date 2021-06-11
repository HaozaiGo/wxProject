/*
 * @Author: your name
 * @Date: 2021-04-27 09:49:15
 * @LastEditTime: 2021-06-03 14:57:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-back\util\util.js
 */
module.exports = {
    // 时间格式化
    timeStampToTime(timestamp) {
        const date = new Date(timestamp);
        const Y = date.getFullYear() + '-';
        const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        const D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
        const h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
        const m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
        const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        return Y + M + D + h + m + s;
    },
    //随便2位数
     randomNum(){
         var $num = parseInt(Math.ceil(Math.random()*99));
        return $num

     }
}