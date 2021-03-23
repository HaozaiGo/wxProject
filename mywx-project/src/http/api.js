import fly from './interceptor'
//实例配置
fly.config.timeout = 5000;
fly.config.baseURL = 'https://codeve.online';

export const imgUrl = fly.config.baseURL;

export function Banner(parmas) {
  return fly.get('/test', parmas);
}
