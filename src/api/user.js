import request from '@/utils/request'

export function login(data) {
  console.log("loginName",data)
  return request({
    // url: '/vue-element-admin/user/login',
    url: 'glps/api/user/login',
    method: 'post',
    data:{...data}
  })
}

export function getInfo(token) {
  return request({
    url: '/glps/api/user/',
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