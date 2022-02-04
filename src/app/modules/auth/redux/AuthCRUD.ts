import axios from './http-common'
import {AuthModel} from '../models/AuthModel'
import {UserModel} from '../models/UserModel'

//const API_URL = process.env.REACT_APP_API_URL

export const GET_USER_BY_ACCESSTOKEN_URL = `verify_token`
export const LOGIN_URL = `login`
export const REGISTER_URL = `register`
export const REQUEST_PASSWORD_URL = `forgot_password`

// Server should return AuthModel
export function login(email: string, password: string) {
  return axios.get(LOGIN_URL, {
    params: {
      username: email,
      password: password,
    },
  })
}

// Server should return AuthModel
export function register(email: string, firstname: string, lastname: string, password: string, password_confirmation: string) {
  return axios.post<AuthModel>(REGISTER_URL, {
    email,
    first_name: firstname,
    last_name: lastname,
    password,
    password_confirmation
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.get<{result: boolean}>(REQUEST_PASSWORD_URL, {
    params: {
      email: email,
    },
  })
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  // Check common redux folder => setupAxios
  return axios.get<UserModel>(GET_USER_BY_ACCESSTOKEN_URL)
}
