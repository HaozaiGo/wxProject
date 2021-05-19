/*
 * @Author: your name
 * @Date: 2021-05-17 10:38:55
 * @LastEditTime: 2021-05-18 11:32:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-back\src\api\pick2.js
 */
import http from '../utils/http'
import {resquest} from '@/api/api.js'
//上传pick2描述
export function uploadPick2Drs(params){
    return http.post(`${resquest}/pick2UpLoad`,params)
}
//获取pick2列表
export function getPick2Data(){
    return http.get(`${resquest}/getPick2List`)
} 