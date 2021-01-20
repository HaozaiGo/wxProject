var express = require('express')
const User = require('../models/login')
const crypto = require('crypto')
const { userInfo } = require('os')
const secret = 'abcde'


exports.logining = (req, res) => {
    console.log(req.body)
    const { username, password } = req.body;
    console.log(username)
        // const hash = crypto.createHmac('sha256', secret)
        //     .update(username)
        //     .digest('hex')
        // console.log(hash)
    User.findOne({
            username
        })
        .then(data => {
            if (!data) return res.status(400).json('账号密码错误')
            else {
                console.log(data);
                res.send(data)
            }
        })
        // Login.findOne({
        //     userName: username,
        // }).then(userData => {
        //     if (!userData) return res.status(400).json('账号或者密码错误')
        //     if (userData) console.log('111')

    // }).catch(err => console.log(err))
}