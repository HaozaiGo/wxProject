var express = require('express');
var router = express.Router();
const Index = require('../models/index');
const User = require('../models/login')
const upLoadImg = require('../util/upLoadImg');

//test
exports.add_Test = (req, res) => {
  console.log(req.body);
  const { user, imgTitle, introduction } = req.body;

  console.log(user, imgTitle, introduction);
  const newIndex = new Index({
    user,
    imgTitle,
    introduction
  })

  newIndex.save().then(data => {
    res.send('200,新增success')
  }).catch(err => console.log(err))
}

// 删除图片
exports.deleteTest = (req, res) => {
  const deleteOne = req.body.user;
  Index.findOneAndRemove({ user: deleteOne }).then(data => {
    console.log(data);
    res.send(' 200,删除success')
  }).catch(err => console.log(err))
}

// 查询
exports.test = (req, res) => {
  Index.find()
    .then(data => {
      res.send(data)
    }).catch(err => console.log(err))
}

//修改接口
exports.updateTest = (req, res) => {
  const { _id, imgTitle, introduction } = req.body;
  Index.findOneAndUpdate({ _id }, { $set: { imgTitle, introduction } }, { new: true })
    .then(data => {
      res.status(200).send(data)
    }).catch(err => console.log(err))
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
      upLoadImg(req, res, 1, data._id, 'public')
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
      upLoadImg(req, res, 2, data._id, 'avatar')
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
exports.upLoadAppId = (req, res) => {
  const username = req.headers.authorization;
  const { appId } = req.body;
  console.log(appId)
  User.findOneAndUpdate({ username }, { $set: { appId: appId } }, { new: true }).then(data => {
    res.json(data)
  }).catch(err => {
    console.log(err)
  })
}

//对比appid
exports.compireAppId = (req, res) => {
  const { appId } = req.body;
  console.log(appId)
  User.findOne({ appId }).then(data => {
    console.log(data)
    res.send(data)
  }).catch(err => {
    console.log(err)
  })

}
// module.exports = router;