import http from '../utils/http'

// resquest 请求地址
// '/testIp'代表vue-cli中config, index.js中配置的代理

let resquest = 'http://localhost:3000'

export function getIndex(params) {
    return http.get(`${resquest}/banner`, params)
}

export function login(params) {
    return http.post(`${resquest}/login`, params)
}

export { resquest }