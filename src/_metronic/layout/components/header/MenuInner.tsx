import React, { useState, useEffect, useRef } from 'react'
import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import {useIntl} from 'react-intl'
import { connect, shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../setup'
import { getMenuItems } from '../../../../app/modules/auth/redux/AuthCRUD'
import { MenuItems } from '../../../../app/modules/auth/models/MenuItems'
import * as auth from '../../../../app/modules/auth/redux/AuthRedux'

export function MenuInner(props) {

  const intl = useIntl();
  const dispatch = useDispatch()

  useEffect(() => {
    const toAwait = async () => {
      await getMenuItems()
      .then(res => res.data)
      .then(tasks => {
        dispatch(auth.actions.menuItems(tasks))})  
      }
    toAwait()
    }, [])

  const permission = useSelector<RootState>(state => state.auth.accessToken, shallowEqual)
  const itemstate: MenuItems[] = useSelector<RootState>(state => state.auth.items, shallowEqual) as MenuItems[]
  
  return(
    <>
      {itemstate == null? (
        <p> </p>
      ) : (
          itemstate.map(item => 
            <MenuItem key={item.id} title={item.menuTitle} to={"/"+item.menuTo} />
          )
      )}
      {/*  */}
      {permission === "Admin" && 
        <MenuInnerWithSub
          title='Setting'
          to='/setting'
          menuPlacement='bottom-start'
          menuTrigger='click'
        >
          <MenuItem to='/setting/user' title='Create User' hasBullet={true} />
          <MenuItem to='/setting/role' title='Create Role' hasBullet={true} />
          <MenuItem to='/setting/tenant' title='Add/Edit Tenant' hasBullet={true} />
          <MenuItem to='/setting/consultant' title='Add/Edit Consultant' hasBullet={true} />
          <MenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />
        </MenuInnerWithSub> 
      }
    </>
  )
}
const mapStateToProps = (props) => {
  return {
    role1: props.permissions,
    item: props.items
  }
};
export default connect(mapStateToProps)(MenuInner);