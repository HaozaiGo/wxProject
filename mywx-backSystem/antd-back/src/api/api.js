import Axios from 'axios';
//实例地址
const url = 'http://localhost:3000'

// 轮播图
let banner = function() {
    Axios.get(`${url}/banner`).then(res => {
        return res.data
    })
}
export { banner }