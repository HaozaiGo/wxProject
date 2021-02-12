// 设置轮播图
const mongoose = require('mongoose')

const indexSchema = new mongoose.Schema({
    user: {
        type: String
    },
    //banner
    upLoadPic: { type: Array },
    //TITLE 
    imgTitle: { type: String },
    //introduction
    introduction: { type: String },
    // secondIntroduction
    secondeIntroduction: { type: String },
    // avatar
    avatar: String
})

module.exports = mongoose.model('index', indexSchema)