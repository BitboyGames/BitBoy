import axios from "axios"
import baseUrl from './baseUrl.json'
import { cookies } from "@/utils";
import store from '@/store'

let env = process.env.VUE_APP_EVN === 'development' ? 'meta' : 'prod'
let url = baseUrl[env]

const instance = axios.create({
  baseURL: url,
  timeout: 30 * 1000,
})

instance.interceptors.request.use( async (config)=>{
  if ((config.baseURL.includes('bitboy.games') || config.baseURL.includes('bitcoinnftz.xyz')) && !config.url.includes('https://mempool')) {
    const access_token = cookies.get('ordz-session')
    config.headers['ordz-session'] =  access_token || ''
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

instance.interceptors.response.use(function (res) {
  if (res.data.code === 200113 && !res.request.responseURL.includes('login')) {
    cookies.remove('ordz-session')
    store.commit('updateAuthState', true)
  }
  return res;
}, function (error) {
  return Promise.reject(error);
});

export default instance
