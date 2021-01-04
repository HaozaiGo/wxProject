module.exports = app => {
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://127.0.0.1:27017/antd-back', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'conection error'));
    db.once('open', function() {
        console.log('connected!')
    })

}