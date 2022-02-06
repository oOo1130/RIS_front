/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React, {FC} from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'
import {shallowEqual, useSelector} from 'react-redux'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import {PrivateRoutes} from './PrivateRoutes'
import {Logout, AuthPage} from '../modules/auth'
import {ErrorsPage} from '../modules/errors/ErrorsPage'
import {rootReducer, RootState} from '../../setup'
import {MasterInit} from '../../_metronic/layout/MasterInit'
// import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper'
// import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'
// import ProfilePage from '../modules/profile/ProfilePage'
// import WizardsPage from '../modules/wizards/WizardsPage'
// import WidgetsPage from '../modules/widgets/WidgetsPage'
// import AccountPage from '../modules/accounts/AccountPage'
// import ChatPage from '../modules/apps/chat/ChatPage'
// import { MenuTestPage } from '../pages/MenuTestPage'
// import { Login } from '../modules/auth/components/Login'

const Routes: FC = () => {
  const isAuthorized = useSelector<RootState>(({auth}) => auth.user, shallowEqual)
  console.log("reduce", isAuthorized)
  return (
    <>
      <Switch>
        {!isAuthorized ? (
          /*Render auth page when user at `/auth` and not authorized.*/
          <Route>
            <AuthPage />
          </Route>
        ) : (
          /*Otherwise redirect to root page (`/`)*/
          <Redirect from='/auth' to='/' />
        )}

        <Route path='/error' component={ErrorsPage} />
        <Route path='/logout' component={Logout} />

        {!isAuthorized ? (
          /*Redirect to `/auth` when user is not authorized*/
          <Redirect to='/auth/login' />
        ) : (
          <>
            <MasterLayout>
              <PrivateRoutes />
            </MasterLayout>
          </>
        )}
      </Switch>
      <MasterInit />
    </>
  )
}

export {Routes}
