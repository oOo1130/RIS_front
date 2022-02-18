import axios from './http-common'
import {AuthModel} from '../models/AuthModel'
import {UserModel} from '../models/UserModel'
import { MenuItems } from '../models/MenuItems'
//import { CreateUserModel } from '../models/CreateUserModel'
import { IConsultant, IHospital, IReportConsultant, IRole, ITenant, IUserListDetails } from '../../accounts/components/settings/SettingsModel'

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

export async function getMenuItems() {
  return await axios.get<MenuItems[]>("GetMenuItems")
}

export async function getAllUsers() {
  return await axios.get<IUserListDetails[]>("GetUserDetails")
}

export async function getReportConsultants() {
  return await axios.get<IReportConsultant[]>("GetAllRadiologists")
}

export async function getRoles() {
  return await axios.get<IRole[]>("GetRoles")
}

export async function getHospitals() {
  return await axios.get<IHospital[]>("GetHospitals")
}

export async function getTenants() {
  return await axios.get<ITenant[]>("GetHospitals")
}

export async function getConsultant() {
  return await axios.post<IConsultant>("AddEditRadiologist")
}

export async function createUser(user: IUserListDetails) {
  return await axios.post<IUserListDetails>("CreateUser", {user})
}