import http from '../utils/http'

// resquest 请求地址
// '/testIp'代表vue-cli中config, index.js中配置的代理

let resquest = 'http://localhost:3000'
    // 主页信息
export function getIndex(params) {
    return http.get(`${resquest}/banner`, params)
}
// 登录
export function login(params) {
    return http.post(`${resquest}/login`, params)
}
// 注册
export function Registered(params) {
    return http.post(`${resquest}/registered`, params)
}
export function deleteImg(params) {
    return http.delete(`${resquest}/deleteImg`, params)
}

export { resquest }