/*
 * @Author: your name
 * @Date: 2021-04-27 09:49:15
 * @LastEditTime: 2021-05-18 11:31:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-back\routes\gather.js
 */
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
    app.post('/uploadAppId',index.upLoadAppId); //上传appid
    app.post('/compireAppId',index.compireAppId); //对比appid
    app.get('/getPick2List',pick.getPick2List); //获取pick2列表
    app.post('/pick2UpLoad',pick.pick2UpLoad); //pick2上传
}