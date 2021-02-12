const fs = require('fs'); //读写文件 文件夹 判断文件类型
const path = require('path'); //解析文件路径 后缀等
const formidable = require('formidable'); //上传文件
const formatTime = require('silly-datetime'); //格式化时间字符串

const Index = require('../models/index');

module.exports = (req, res, flag, id) => {
    let isPath = '';
    let user = '';
    let form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.keepExtensions = true;
    if (flag == 1) {
        isPath = "../public/images";
        Index.findOne({ _id: id })
            .then(data => {
                user = data.user;
            })
    }
    if (flag == 2) {
        isPath = "../public/images/avatar";
    }
    form.uploadDir = path.join(__dirname, isPath) //设置上传文件临时存放位置
    form.parse(req, (err, fields, files) => {
        let file = files.file,
            avatarPath = files.avatar;
        // console.log(avatarPath)

        if (err) {
            return res.status(500).json({ result: '服务器内部出错' })
        }
        let time = formatTime.format(new Date(), 'YYYYMMDDHHmmss');
        let num = Math.floor(Math.random() * 1000 + 1000);
        var imageFinalName = `${time}_${num}.png`;
        var avatarName = `${time}_${num}_avatar.png`;
        // 这里有问题
        // let newPath = form.uploadDir + '/' + flag == 1 ? imageFinalName : avatarName;
        let newPath = form.uploadDir + '/' + imageFinalName;
        let newAvatarPath = form.uploadDir + '/' + avatarName;

        console.log(newPath)

        //1为普通上传，2上传头像 
        fs.rename(flag == 1 ? file.path : avatarPath.path, flag == 1 ? newPath : newAvatarPath, (err) => {
            if (err) {
                console.log(err);
                return res.status(412).json({ result: '上传失败' });
            } else {
                if (flag == 1) { // 在Index表banner里面上传图片
                    Index.findOneAndUpdate({ _id: id }, { $push: { upLoadPic: imageFinalName } }, { new: true })
                        .then(data => {
                            console.log(data)
                        }).catch(err => console.log(err))

                    res.send({ 'status': 200, 'msg': '图片上传成功', result: { upLoadPic: imageFinalName, user: user } })
                }
                if (flag == 2) {
                    //上传头像
                    Index.findOneAndUpdate({ _id: id }, { avatar: avatarName })
                        .then(data => {
                            // console.log(data);
                            res.json(data)
                        })

                }
            }
        })
    })
}