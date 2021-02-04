const index = require('./index');
const profile = require('./profile');
const login = require('./login')


module.exports = app => {
    app.get('/banner', index.banner);
    app.post('/login', login.logining);
    app.post('/registered', login.registered);
    app.post('/uploadImg', index.upLoadImg);
    app.delete('/deleteImg', index.deleteImg);
    app.post('/upLoadAvatar', index.upLoadAvatar)
}