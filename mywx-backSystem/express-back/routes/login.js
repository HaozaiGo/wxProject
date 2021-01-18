var express = require('express')
const Login = require('../models/login')

exports.login = (req, res) => {
    // res.setHeader('Content-Type', 'application/json;charset=UTF-8')
    console.log(req.body.username)
    const username = req.body.username;
    const password = req.body.password;
    Login.findOne({
        userNmame: username,

    })

    res.send('get it')
}