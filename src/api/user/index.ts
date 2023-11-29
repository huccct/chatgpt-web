import request from '@/utils/request'

enum API {
  LOGIN_URL = '/login'
}

export const reqLogin = (data: any) => request.post(API.LOGIN_URL, data)
