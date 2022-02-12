import React, { useState, useEffect, useRef } from 'react'
import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import {useIntl} from 'react-intl'
import { connect, shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../setup'
import { getMenuItems } from '../../../../app/modules/auth/redux/AuthCRUD'
import { MenuItems } from '../../../../app/modules/auth/models/MenuItems'
import { MegaMenu } from './MegaMenu'
import * as auth from '../../../../app/modules/auth/redux/AuthRedux'
import store, {persistor} from '../../../../setup/redux/Store'

// import * as auth from '../../../../app/modules/auth/redux/AuthRedux'

export function MenuInner(props) {

  const intl = useIntl();
  let initialState: MenuItems[] = [{
    id: 1,
    menuTitle: "",
    menuTo: "",
  }]

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
  console.log(permission)
  const itemstate: MenuItems[] = useSelector<RootState>(state => state.auth.items, shallowEqual) as MenuItems[]
  console.log(itemstate, typeof(itemstate), "itemstate")
  console.log("111111111111111111")
  
  return(
    <>
      {itemstate == null? (
        <p>No result</p>
      ) : (
          itemstate.map(item => 
            <MenuItem key={item.id} title={item.menuTitle} to={"/"+item.menuTo} />
          )
      )}
      {permission === "Admin" && 
        <MenuInnerWithSub
          title='Setting'
          to='/setting'
          menuPlacement='bottom-start'
          menuTrigger='click'
        >
          <MenuItem to='/setting/user' title='Create User' hasBullet={true} />
          <MenuItem to='/role' title='Create Role' hasBullet={true} />
          <MenuItem to='/tenant' title='Add/Edit Tenant' hasBullet={true} />
          <MenuItem to='/consultant' title='Add/Edit Consultant' hasBullet={true} />
          <MenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />
        </MenuInnerWithSub> 
      }
    </>
  )
}
// export default MenuInner

// function dispatch(arg0: { type: string; payload: { user: import("../../../../app/modules/auth/models/UserModel").UserModel } }) {
//   throw new Error('Function not implemented.')
// }
const mapStateToProps = (props) => {
  return {
    role1: props.permissions,
    item: props.items
  }
};
export default connect(mapStateToProps)(MenuInner);