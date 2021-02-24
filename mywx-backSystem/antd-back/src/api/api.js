import http from '../utils/http'
import store from '../store/index'
// resquest 请求地址
// '/testIp'代表vue-cli中config, index.js中配置的代理

let resquest = 'http://localhost:3000'
var userName = store.getters.getUserName;

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
// 删除轮播图
export function deleteImg(params) {
    return http.delete(`${resquest}/deleteImg`, params)
}
// 上传信息
export function uploadInfo(params) {
    console.log(store.getters.getUserName)
    console.log(userName)
    return http.get(`${resquest}/uploadInfo?user=${store.getters.getUserName}`, params)
}
// 获取pick1内容
export function getPick1Data() {
    return http.get(`${resquest}/getPick1Data?user=${store.getters.getUserName}`)
}
// 上传pick1内容
export function pick1Upload(params) {
    return http.get(`${resquest}/pick1Upload?user=${store.getters.getUserName}`, params)
}
export { resquest }