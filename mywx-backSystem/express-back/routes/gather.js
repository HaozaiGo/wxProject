const index = require('./index');
const profile = require('./profile');
const login = require('./login')


module.exports = app => {
    app.get('/banner', index.banner);
    app.post('/login', login.login)
}