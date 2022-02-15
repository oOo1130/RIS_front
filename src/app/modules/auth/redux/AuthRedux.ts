import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {put, takeLatest} from 'redux-saga/effects'
import {UserModel} from '../models/UserModel'
import {getMenuItems, getReportConsultants, getRoles, getTenants, getUserByToken} from './AuthCRUD'
import {MenuItems} from '../models/MenuItems'
//import { CreateUserModel } from '../models/CreateUserModel'
import { IHospital, IReportConsultant, IRole, ITenant, IUserListDetails } from '../../accounts/components/settings/SettingsModel'

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

export const actionTypes = {
  Login: '[Login] Action',
  Logout: '[Logout] Action',
  Register: '[Register] Action',
  UserRequested: '[Request User] Action',
  UserLoaded: '[Load User] Auth API',
  SetUser: '[Set User] Action',
  MenuItems: '[menuItems] Action',
  GetAllUsers: '[getAllUsers] Action',
  getReportConsultants: '[getReportConsultant] Action',
  getRoles: '[getRoles] Action',
  getHospitals: '[getHospitals] Action',
  getTenants: '[getTenants] Action'
}

const initialAuthState: IAuthState = {
  user: undefined,
  accessToken: undefined,
  items: undefined,
  users: undefined,
  consultants: undefined,
  roles: undefined,
  hospitals: undefined,
  tenants: undefined
}

export interface IAuthState {
  user?: UserModel
  accessToken?: string
  items?: MenuItems[]
  users?: IUserListDetails[]
  consultants?: IReportConsultant[]
  roles?: IRole[]
  hospitals?: IHospital[]
  tenants?: ITenant[]
}

export const reducer = persistReducer(
  {storage, key: 'v100-demo1-auth', whitelist: ['user', 'accessToken']},
  (state: IAuthState = initialAuthState, action: ActionWithPayload<IAuthState>) => {
    switch (action.type) {
      case actionTypes.Login: {
        const accessToken = action.payload?.accessToken
        return {accessToken, user: undefined}
      }

      case actionTypes.Register: {
        const accessToken = action.payload?.accessToken
        return {accessToken, user: undefined}
      }

      case actionTypes.Logout: {
        return initialAuthState
      }

      case actionTypes.UserRequested: {
        return {...state, user: undefined}
      }

      case actionTypes.UserLoaded: {
        const user = action.payload?.user
        return {...state, user}
      }

      case actionTypes.SetUser: {
        const user = action.payload?.user
        return {...state, user}
      }

      case actionTypes.MenuItems: {
        const items = action.payload?.items
        return {...state, items}
      }

      case actionTypes.GetAllUsers: {
        const users = action.payload?.users
        return {...state, users}
      }

      case actionTypes.getReportConsultants: {
        const consultants = action.payload?.consultants
        return {...state, consultants}
      }

      case actionTypes.getRoles: {
        const roles = action.payload?.roles
        return {...state, roles}
      }

      case actionTypes.getHospitals: {
        const hospitals = action.payload?.hospitals
        return {...state, hospitals}
      }

      case actionTypes.getTenants: {
        const tenants = action.payload?.tenants
        return {...state, tenants}
      }

      default:
        return state
    }
  }
)

export const actions = {
  login: (accessToken: string) => ({type: actionTypes.Login, payload: {accessToken}}),
  register: (accessToken: string) => ({
    type: actionTypes.Register,
    payload: {accessToken},
  }),
  logout: () => ({type: actionTypes.Logout}),
  requestUser: () => ({
    type: actionTypes.UserRequested,
  }),
  fulfillUser: (user: UserModel) => ({type: actionTypes.UserLoaded, payload: {user}}),
  setUser: (user: UserModel) => ({type: actionTypes.SetUser, payload: {user}}),
  menuItems: (items: MenuItems[]) => ({type: actionTypes.MenuItems, payload: {items}}),
  getUsers: (users: IUserListDetails[]) => ({type: actionTypes.GetAllUsers, payload: {users}}),
  reportConsultants: (consultants: IReportConsultant[]) => ({type: actionTypes.getReportConsultants, payload: {consultants}}),
  getRoles: (roles: IRole[]) => ({type: actionTypes.getRoles, payload: {roles}}),
  getHospitals: (hospitals: IHospital[]) => ({type: actionTypes.getHospitals, payload: {hospitals}}),
  getTenants: (tenants: ITenant[]) => ({type: actionTypes.getTenants, payload: {tenants}})
}

export function* saga() {
  yield takeLatest(actionTypes.Login, function* loginSaga() {
    yield put(actions.requestUser())
  })

  yield takeLatest(actionTypes.Register, function* registerSaga() {
    yield put(actions.requestUser())
  })

  yield takeLatest(actionTypes.UserRequested, function* userRequested() {
    const {data: user} = yield getUserByToken()
    yield put(actions.fulfillUser(user))
  })
}
