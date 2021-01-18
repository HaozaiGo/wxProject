var express = require('express');
var router = express.Router();
const Index = require('../models/index')

/* GET home page. */

exports.banner = (req, res) => {
        Index.find()
            .then(data => {
                res.send(data)
            })
    },
    exports.upLoadImg = (req, res) => {

    }

// module.exports = router;