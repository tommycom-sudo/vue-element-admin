import request from '@/utils/request'

export function login(data) {
  console.log('login(data):', data)
  return request({
    url: 'http://192.168.6.134/api/User/login', // '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  console.log('getInfo(token):', token)
  return request({
    url: 'http://192.168.6.134/api/user/getinfo', // '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
