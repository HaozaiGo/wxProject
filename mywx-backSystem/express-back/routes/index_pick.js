/*
 * @Author: your name
 * @Date: 2021-04-27 09:49:15
 * @LastEditTime: 2021-05-12 14:23:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-back\routes\index_pick.js
 */
const Pick1 = require('../models/pick1');
const upLoadImg = require('../util/upLoadImg');
let firstTime = true;
let count = 0;
// pick1Data
exports.getPick1Data = (req, res) => {
  const username = req.headers.authorization;
  // console.log(username)
  Pick1.findOne({ username })
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
    Pick1.create({ username, pick1List: { key: count, Name: name, description: description, Tags: tags } });
    firstTime = false;
  }

  console.log(username, name, description, tags)
  Pick1.findOneAndUpdate({ username }, { $push: { pick1List: { key: count++, Name: name, description: description, Tags: tags } } }, { new: true })
    .then(data => {
      res.json(data)
    })
}

//delete one
exports.deletePick1 = (req, res) => {
  const username = req.headers.authorization,
    key = req.query.key;
  Pick1.findOne({ username })
    .then(data => {
      let result = data.pick1List.filter(item => {
        return item.key != key;
      })
      Pick1.findOneAndUpdate({ username }, { $set: { pick1List: result } })
        .then(datas => {
          res.json(datas)
        })
        .catch(err=>{
          console.log(err)
        })
    }
    )
}
exports.pick2UpLoad = (req,res) =>{
  const username = req.headers.authorization;
  const body = req.body;
  console.log(username);
  // console.log(req)
  Pick1.findOne({username})
        .then(data=>{
          console.log(data)
          upLoadImg(req,res,3,data._id,'public')
        })
        .catch(err=>{
          console.log(err)
        })
        

} 