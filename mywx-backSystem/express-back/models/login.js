const mongoose = require('mongoose')
const crypto = require('crypto')
const secret = 'abcd'

const UserLogin = new mongoose.Schema({
    userNmame: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String,
        set(val) {
            return crypto.createHmac('sha256', secret)
                .update(val || 'root')
                .digest('hex')
        }
    }
})

module.exports = mongoose.model("User", UserLogin)