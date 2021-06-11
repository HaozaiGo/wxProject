/*
 * @Author: your name
 * @Date: 2021-04-27 09:49:15
 * @LastEditTime: 2021-06-11 17:52:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-back\routes\index_pick.js
 */

const formidable = require('formidable'); //上传文件
const fs = require('fs');
const upLoadImg = require('../util/upLoadImg');

import { pick1, pick2, pick3 } from '../models/pick1'
import {newPath, imageFinalName} from '../util/uploadImgPath'




let firstTime = true;
let count = 0;
// pick1Data
exports.getPick1Data = (req, res) => {
  const username = req.headers.authorization;
  // console.log(username)
  pick1.findOne({ username })
    .then(data => {
      // console.log(data)
      res.json(data)
    })
}

// pick1Upload
exports.pick1Upload = (req, res) => {
  const username = req.headers.authorization;
  const { name, description, tags } = req.query
  if (firstTime) {
    pick1.create({ username, pick1List: { key: count, Name: name, description: description, Tags: tags } });
    firstTime = false;
  }

  console.log(username, name, description, tags)
  pick1.findOneAndUpdate({ username }, { $push: { pick1List: { key: count++, Name: name, description: description, Tags: tags } } }, { new: true })
    .then(data => {
      res.json(data)
    })
}

//pick1 delete one
exports.deletePick1 = (req, res) => {
  const username = req.headers.authorization,
    key = req.query.key;
  pick1.findOne({ username })
    .then(data => {
      let result = data.pick1List.filter(item => {
        return item.key != key;
      })
      pick1.findOneAndUpdate({ username }, { $set: { pick1List: result } })
        .then(datas => {
          res.json(datas)
        })
        .catch(err => {
          console.log(err)
        })
    }
    )
}
//pick2列表
exports.getPick2List = (req, res) => {
  const username = req.headers.authorization;

  pick2.find({ username })
    .then(data => {
      res.json(data)
    })
}

//pick2上传 (接口分开)
exports.pick2UpLoad = (req, res) => {
  const username = req.headers.authorization;
  const body = req.body;
  // console.log(body)
  // console.log(req)
  pick1.findOne({ username })
    .then(data => {
      upLoadImg(req, res, 3, data._id, 'public');
      res.send({
        message: '上传成功'
      })
    })
    .catch(err => {
      console.log(err)
    })
}
//pick2删除单个
exports.pick2DeleteOne = (req, res) => {
  const username = req.headers.authorization;
  const delKey = req.query.index;

  pick1.findOneAndUpdate({ username }, { $pull: { pick2List: { key: Number(delKey) } } }, function (err, data) {
    if (err) {
      res.status(500).json(err)
      return
    } else {
      res.status(200).json(data)
    }
  })

}
//pick2编辑
exports.pick2Update = (req, res) => {
  const username = req.headers.authorization;
  const form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.log(err)
      return;
    }
    const { disValue, key } = fields;
    fs.rename(files.file.path, newPath(), async(err) => {
      if(err){
        console.log(err)
      }else{
        const pick2UpdateRe = await pick2.findOneAndUpdate({ _id: key }, { $set: { description: disValue, img: imageFinalName } })
        console.log(pick2UpdateRe)
      }
    })

    console.log(files)
    res.send({
      status: 200,
      success: '修改成功'
    })


  })
}

//pick3上传
exports.pick3Upload = (req,res) =>{
  const form = new formidable.IncomingForm();
  form.parse(req,(err,fields,files)=>{
    if (err) {
      console.log(err)
      return;
    }
    
    fs.rename(files.file.path,newPath(),async (err)=>{
      if(err){
        console.log(err)
      }else{

      }
    })
  })
}