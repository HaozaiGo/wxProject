const mongoose = require('mongoose')
const crypto = require('crypto')
const secret = 'abcde'

const userLogin = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String,
        set(val) {
            return crypto.createHmac('sha256', secret)
                .update(val)
                .digest('hex')
        }
    },
    phone: {
        type: String,
        default: ''
    },
    appId:{
        type:String,
        default:''
    }
})

module.exports = mongoose.model('user', userLogin)