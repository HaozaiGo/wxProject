const express = require('express')
const router = require('./routes/gather')
const path = require('path')
const mongodb = require('./db/db')
var cors = require('cors')


const app = express()
    //cors跨域
app.use(cors())
const port = 3000



//静态资源
app.use(express.static(path.join(__dirname, 'public')))
    // 导入路由
router(app)
    //数据库
mongodb()



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});


//开启监听
app.listen(port, () => console.log(`Example app listening on port ${port}`))