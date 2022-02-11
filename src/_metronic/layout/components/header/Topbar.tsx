import clsx from 'clsx'
import React, {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {HeaderNotificationsMenu, HeaderUserMenu, QuickLinks, Search} from '../../../partials'
import {useLayout} from '../../core'
import { useDispatch } from 'react-redux'
import * as auth from '../../../../app/modules/auth/redux/AuthRedux'


const toolbarButtonMarginClass = 'ms-1 ms-lg-3',
  toolbarButtonHeightClass = 'w-30px h-30px w-md-40px h-md-40px',
  toolbarUserAvatarHeightClass = 'symbol-30px symbol-md-40px',
  toolbarButtonIconSizeClass = 'svg-icon-1'

const Topbar: FC = () => {
  const {config} = useLayout()
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(auth.actions.logout())
  }
  return (
    <div className='d-flex align-items-stretch flex-shrink-0'>
      {/* begin::User */}
      <div
        className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}
        id='kt_header_user_menu_toggle'
      >
        {/* begin::Toggle */}
        <div
          className={clsx('cursor-pointer symbol', toolbarUserAvatarHeightClass)}
          data-kt-menu-trigger='click'
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
          data-kt-menu-flip='bottom'
        >
          <a onClick={logout} className='menu-link px-5'>
            Sign Out
          </a>
        </div>
        <HeaderUserMenu />
        {/* end::Toggle */}
      </div>
      {/* end::User */}

    
    </div>
  )
}

export {Topbar}
