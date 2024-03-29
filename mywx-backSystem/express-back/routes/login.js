var express = require('express')
const User = require('../models/login')
const Index = require('../models/index')
const Pick1 = require('../models/pick1')
const crypto = require('crypto')
const { userInfo } = require('os')
const secret = 'abcde'

// 注册
exports.registered = (req, res) => {
    // console.log(req.body)
    const { username, password } = req.body;
    User.findOne({
        username
    }).then(data => {
        if (data) return res.status(401).send('账号已经被其他人注册')
        else {
            console.log(username, password)
            const newIndex = new Index({
                user: username
                
            })

            const newUser = new User({
                username,
                password
            })

            const newPick1 = new Pick1({
                username
            })

            newPick1.save();
            newIndex.save();
            newUser.save()
                .then(data => {
                    res.send('success')
                }).catch(err => console.log(err))
        }
        console.log('success注册成功')
    })

}

// 登录
exports.logining = (req, res) => {
    const { username, password } = req.body;
    const hashPassword = crypto.createHmac('sha256', secret)
        .update(password)
        .digest('hex')
    User.findOne({
            username,
            password
        })
        .then(data => {
            if (!data) return res.status(400).json('账号密码错误')
            else {
                console.log(data);
                return res.status(200).send(data)
            }
        })
}