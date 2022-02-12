import axios from './http-common'
import {UserModel} from '../models/UserModel'
import { MenuItems } from '../models/MenuItems'

export const GET_USER_BY_ACCESSTOKEN_URL = `verify_token`
export const MENUITEM = `GetMenuItems`

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  // Check common redux folder => setupAxios
  return axios.get<UserModel>(GET_USER_BY_ACCESSTOKEN_URL)
}

export function getMenuItems() {
  return axios.get<MenuItems[]>(MENUITEM)
}