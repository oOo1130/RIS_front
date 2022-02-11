//import React, { useState } from 'react'
import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import {useIntl} from 'react-intl'
import { connect, shallowEqual, useSelector } from 'react-redux'
import { RootState } from '../../../../setup'
import { getMenuItems } from '../../../../app/modules/auth/redux/AuthCRUD'
import { MenuItems } from '../../../../app/modules/auth/models/MenuItems'

export function MenuInner() {
// const MenuInner = async (props: any) => {

  let menuItems: MenuItems[] = [{id:1, menuItem:"menu", menuTo:"menu"}]
  const items = getMenuItems()
      .then(res => {
        console.log((res.data as MenuItems[]).length , typeof(res.data), "res.data")
        // let array = res.data as MenuItems[]
        // for(var i = 0; i <= array.length; i++){
        //   menuItems.push(array[i])
        // }
        menuItems.push(...res.data)
        return res.data
      })
      .catch(() => {
        console.log("There are no any menuitems!!!")
      })
  console.log(items, "items")
  console.log(menuItems, "menuItems")
  
  const permission = useSelector<RootState>(state => state.auth.accessToken, shallowEqual)
  console.log(permission)

  const it = useSelector<RootState>(state => state.auth.items)
  console.log(it, "state_____")

  return(
    <>
      {menuItems.map(item => 
        <MenuItem key={item.id} title={item.menuItem} to={"/"+item.menuTo} />
      )}

      {/* <MenuItem title='Home' to='/dashboard' />
      <MenuItem title='Reconcilation' to='/dashboard' />
      <MenuItem title='Order&nbsp;Entry' to='/dashboard' />
      <MenuItem title='Worklist' to='/dashboard' />
      <MenuItem title='Reports' to='/dashboard' />
      <MenuItem title='Priors' to='/dashboard' />
      <MenuItem title='Masters' to='/dashboard' />
      <MenuItem title='Exports' to='/dashboard' />
      <MenuItem title='Upload' to='/dashboard' />
      <MenuItem title='Web&nbsp;Uploader' to='/dashboard' /> */}

      {permission == "Admin" && 
      <MenuInnerWithSub
        title='Setting'
        to='/apps/chat'
        icon='/media/icons/duotune/communication/com011.svg'
        hasArrow={true}
        menuPlacement='right-start'
        menuTrigger={`{default:'click', lg: 'hover'}`}
      >
        <MenuItem to='/dashboard' title='User' hasBullet={true} />
        <MenuItem to='/apps/dashboard' title='Create User' hasBullet={true} />
        <MenuItem to='/apps/chat/drawer-chat' title='Add/Delete worklist' hasBullet={true} />
      </MenuInnerWithSub> 
      }
    </>
  )
}
export default MenuInner
// const mapStateToProps = (props: any) => {
//   return {
//     role: props.permission,
//     item: props.menuItem
//   }
// };
// export default connect(mapStateToProps)(MenuInner);