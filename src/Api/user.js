import request from '@/utils/request'

export function login() {
    return request({
      url: 'http://127.0.0.1:8000/api/v1/login',
      method: 'post',
      data: {
        username: 'admin',
        password: '123456'
      }
    })
  }