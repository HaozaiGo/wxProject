/*
 * @Author: your name
 * @Date: 2021-04-27 09:49:15
 * @LastEditTime: 2021-06-10 17:44:51
 * @LastEditors: Please set LastEditors
 * @params: req res id默认必传 flag处理暗号 position图片存放位置'public'/'avatar'
 * @Description: uploadIMg
 * @FilePath: \express-back\util\upLoadImg.js
 */
const fs = require('fs'); //读写文件 文件夹 判断文件类型
const path = require('path'); //解析文件路径 后缀等
const formidable = require('formidable'); //上传文件
const formatTime = require('silly-datetime'); //格式化时间字符串
const Index = require('../models/index');

import { pick1, pick2 } from '../models/pick1';

module.exports = (req, res, flag, id, position) => {
    let isPath = '';
    let user = '';
    let form = new formidable.IncomingForm();
    const username = req.headers.authorization;
    form.encoding = 'utf-8';
    form.keepExtensions = true;
    if (position == 'public') {
        isPath = "../public/images";
        // Index.findOne({ _id: id })
        //     .then(data => {
        //         user = data.user;
        //     })
    }
    if (position == 'avatar') {
        isPath = "../public/images/avatar";
    }
    form.uploadDir = path.join(__dirname, isPath) //设置上传文件临时存放位置
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(500).json({ result: '服务器内部出错' })
        }
        let file = files.file,
            avatarPath = files.avatar;


        // console.log(files)
        // console.log(fields)

        // console.log(req)

        let time = formatTime.format(new Date(), 'YYYYMMDDHHmmss');
        let num = Math.floor(Math.random() * 1000 + 1000);
        var imageFinalName = `${time}_${num}.png`;
        var avatarName = `${time}_${num}_avatar.png`;

        let newPath = form.uploadDir + '/' + imageFinalName;
        let newAvatarPath = form.uploadDir + '/' + avatarName;

        // console.log(newPath)

        let oldImgName = () => {
            if (flag == 1 || flag == 3 || flag == 4) return file.path;
            if (flag == 2) return avatarPath.path
        }
        let newImgName = () => {
            if (flag == 1 || flag == 3 || flag == 4) return newPath;
            if (flag == 2) return newAvatarPath;
        }
        //1为普通上传，2上传头像 
        fs.rename(oldImgName(), newImgName(), (err) => {
            if (err) {
                console.log(err);
                return res.status(412).json({ result: '上传失败' });
            } else {
                if (flag == 1) { // 在Index表banner里面上传图片
                    Index.findOneAndUpdate({ _id: id }, { $push: { upLoadPic: imageFinalName } }, { new: true })
                        .then(data => {
                            console.log(data)
                        }).catch(err => console.log(err))
                    res.send({ 'status': 200, 'msg': '图片上传成功', result: { upLoadPic: imageFinalName } })
                }
                if (flag == 2) {
                    //上传头像
                    Index.findOneAndUpdate({ _id: id }, { avatar: avatarName })
                        .then(data => {
                            // console.log(data);
                            res.json(data)
                        })
                }
                if (flag === 3) {

                    // console.log(fields.key)
                    // console.log(fields.edit)
                    const { disValue, key } = fields
                    console.log(disValue, key)
                    //pick2添加
                    // pick1.findOneAndUpdate({ _id: id }, { $push: { pick2List: { img: imageFinalName, description: fields.disValue } } })
                    //     // key: parseInt(Math.ceil(Math.random() * 99)),
                    //     .then(data => {
                    //         res.json(data)
                    //     })
                    let newPick2 = new pick2({
                        img: imageFinalName,
                        description: fields.disValue,
                        username
                    })

                    newPick2.save(function (err, result) {
                        if (err) {
                            console.log(err)
                        } else {
                            console.log(result)
                        }
                    })

                }
            }
        })
    })
}