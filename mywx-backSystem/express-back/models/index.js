// 设置轮播图
const mongoose = require('mongoose')

const indexSchema = new mongoose.Schema({
    //banner
    bannerImg: { type: String },
    //TITLE 
    imgTitle: { type: String },
    //introduction
    introduction: { type: String }
})

module.exports = mongoose.model('index', indexSchema)