const index = require('./index');
const profile = require('./profile');
const login = require('./login');
const pick = require('./index_pick');
const pick1 = require('../models/pick1');


module.exports = app => {
    //测试端口
    app.get('/test',index.test)
    
    app.get('/banner', index.banner);
    app.post('/login', login.logining);
    app.post('/registered', login.registered);
    app.post('/uploadImg', index.upLoadImg);
    app.delete('/deleteImg', index.deleteImg);
    app.post('/upLoadAvatar', index.upLoadAvatar);
    app.get('/uploadInfo', index.upLoadInfo);
    app.get('/pick1Upload', pick.pick1Upload);
    app.get('/getPick1Data', pick.getPick1Data);
    app.delete('/deletePick1',pick.deletePick1);
}