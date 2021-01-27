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
    form.uploadDir = path.join(__dirname, isPath) //设置上传文件临时存放位置
    form.parse(req, (err, fields, files) => {
        let file = files.file
            // console.log(file.path)

        if (err) {
            return res.status(500).json({ result: '服务器内部出错' })
        }
        let time = formatTime.format(new Date(), 'YYYYMMDDHHmmss');
        let num = Math.floor(Math.random() * 1000 + 1000);
        var imageFinalName = `${time}_${num}.png`;
        let newPath = form.uploadDir + '/' + imageFinalName;


        fs.rename(file.path, newPath, (err) => {
            if (err) {
                console.log(err);
                return res.status(412).json({ result: '上传失败' });
            } else {
                if (flag == 1) {
                    Index.findOneAndUpdate({ _id: id }, { $push: { upLoadPic: imageFinalName } }, { new: true })
                        .then(data => {
                            console.log(data)
                        }).catch(err => console.log(err))


                    res.send({ 'status': 200, 'msg': '图片上传成功', result: { upLoadPic: imageFinalName, user: user } })
                }
            }
        })
    })
}