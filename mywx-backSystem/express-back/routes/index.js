var express = require('express');
var router = express.Router();
const Index = require('../models/index');
const upLoadImg = require('../util/upLoadImg');

/* GET home page. */

exports.banner = (req, res) => {
    Index.find()
        .then(data => {

            res.send(data)
        })
};
// 上传图片
exports.upLoadImg = (req, res) => {
    const user = req.query.user;
    console.log(user)
    Index.findOne({ user })
        .then(data => {
            // console.log(data)
            upLoadImg(req, res, 1, data._id)
        })
        .catch(err => {
            console.log(err)
        })
}

// module.exports = router;