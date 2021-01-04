const index = require('./index');
const profile = require('./profile');


module.exports = app => {
    app.get('/banner', index.banner)
}