var express = require('express');
var router = express.Router();
const Index = require('../models/index');
const User = require('../models/login')
const upLoadImg = require('../util/upLoadImg');

//test
exports.test = (req, res) => {
  Index.find()
    .then(data => {
      res.send(data)
    })
}

/* GET banner page. */

exports.banner = (req, res) => {
  const user = req.query.user;
  // console.log(user)
  Index.findOne({ user })
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

// 删除图片
exports.deleteImg = (req, res) => {
  const deleteOne = req.query.delete;
  const user = req.query.user
  Index.findOne({ user })
    .then(data => {
      const result = data.upLoadPic.filter(x => x != deleteOne)
      console.log(result)
      Index.findOneAndUpdate({ user }, { $set: { upLoadPic: result } }, { new: true }).then(data => {
        res.json(data)
      })
    })
  console.log(deleteOne, user)

}

// 上传头像
exports.upLoadAvatar = (req, res) => {
  const user = req.query.user;
  Index.findOne({ user })
    .then(data => {
      upLoadImg(req, res, 2, data._id)
    })
    .catch(err => {
      console.log(err)
    })
  console.log(user)
}

// 上传简单介绍
exports.upLoadInfo = (req, res) => {
  const user = req.query.user;
  const { value1, value2 } = req.query;

  Index.findOneAndUpdate({ user }, { $set: { introduction: value1, secondIntroduction: value2 } }, { new: true })
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      console.log(err)
    })
  console.log(user, value1, value2)

}
//上传appId
exports.upLoadAppId = (req,res) =>{
  const username = req.headers.authorization;
  const {appId} = req.body;
  console.log(appId)
  User.findOneAndUpdate({username},{$set:{appId:appId}}, {new:true} ).then(data=>{
    res.json(data)
  }).catch(err=>{
    console.log(err)
  })
}

//对比appid
exports.compireAppId = (req, res) => {
  const {appId} = req.body;
  console.log(appId)
  User.findOne({appId}).then(data=>{
    console.log(data)
    res.send(data)
  }).catch(err=>{
    console.log(err)
  })
 
}
// module.exports = router;