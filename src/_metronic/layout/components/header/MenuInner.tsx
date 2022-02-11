//import React, { useState } from 'react'
import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import {useIntl} from 'react-intl'
import { connect, shallowEqual, useSelector } from 'react-redux'
import { RootState } from '../../../../setup'
import { getMenuItems } from '../../../../app/modules/auth/redux/AuthCRUD'
import { MenuItems } from '../../../../app/modules/auth/models/MenuItems'
import { MegaMenu } from './MegaMenu'

export function MenuInner() {
// const MenuInner = async (props: any) => {

  const intl = useIntl();

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
    <MenuItem title={intl.formatMessage({id: 'MENU.DASHBOARD'})} to='/dashboard' />
      <MenuItem title='Layout Builder' to='/builder' />
      <MenuInnerWithSub
        title='Crafted'
        to='/crafted'
        menuPlacement='bottom-start'
        menuTrigger='click'
      >
        {/* PAGES */}
        <MenuInnerWithSub
          title='Pages'
          to='/crafted/pages'
          fontIcon='bi-archive'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuInnerWithSub
            title='Profile'
            to='/crafted/pages/profile'
            hasArrow={true}
            hasBullet={true}
            menuPlacement='right-start'
            menuTrigger={`{default:'click', lg: 'hover'}`}
          >
            <MenuItem to='/crafted/pages/profile/overview' title='Overview' hasBullet={true} />
            <MenuItem to='/crafted/pages/profile/projects' title='Projects' hasBullet={true} />
            <MenuItem to='/crafted/pages/profile/campaigns' title='Campaigns' hasBullet={true} />
            <MenuItem to='/crafted/pages/profile/documents' title='Documents' hasBullet={true} />
            <MenuItem
              to='/crafted/pages/profile/connections'
              title='Connections'
              hasBullet={true}
            />
          </MenuInnerWithSub>
          <MenuInnerWithSub
            title='Wizards'
            to='/crafted/pages/wizards'
            hasArrow={true}
            hasBullet={true}
            menuPlacement='right-start'
            menuTrigger={`{default:'click', lg: 'hover'}`}
          >
            <MenuItem to='/crafted/pages/wizards/horizontal' title='Horizontal' hasBullet={true} />
            <MenuItem to='/crafted/pages/wizards/vertical' title='Vertical' hasBullet={true} />
          </MenuInnerWithSub>
        </MenuInnerWithSub>

        {/* ACCOUNT */}
        <MenuInnerWithSub
          title='Accounts'
          to='/crafted/accounts'
          fontIcon='bi-person'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/crafted/account/overview' title='Overview' hasBullet={true} />
          <MenuItem to='/crafted/account/settings' title='Settings' hasBullet={true} />
        </MenuInnerWithSub>

        {/* ERRORS */}
        <MenuInnerWithSub
          title='Errors'
          to='/error'
          fontIcon='bi-sticky'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/error/404' title='Error 404' hasBullet={true} />
          <MenuItem to='/error/500' title='Error 500' hasBullet={true} />
        </MenuInnerWithSub>

        {/* Widgets */}
        <MenuInnerWithSub
          title='Widgets'
          to='/crafted/widgets'
          fontIcon='bi-layers'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/crafted/widgets/lists' title='Lists' hasBullet={true} />
          <MenuItem to='/crafted/widgets/statistics' title='Statistics' hasBullet={true} />
          <MenuItem to='/crafted/widgets/charts' title='Charts' hasBullet={true} />
          <MenuItem to='/crafted/widgets/mixed' title='Mixed' hasBullet={true} />
          <MenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />
          <MenuItem to='/crafted/widgets/feeds' title='Feeds' hasBullet={true} />
        </MenuInnerWithSub>
      </MenuInnerWithSub>

      <MenuInnerWithSub title='Apps' to='/apps' menuPlacement='bottom-start' menuTrigger='click'>
        {/* PAGES */}
        <MenuInnerWithSub
          title='Chat'
          to='/apps/chat'
          icon='/media/icons/duotune/communication/com012.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
          <MenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
          <MenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
        </MenuInnerWithSub>
      </MenuInnerWithSub>
      <MenuInnerWithSub
        isMega={true}
        title='Mega menu'
        to='/mega-menu'
        menuPlacement='bottom-start'
        menuTrigger='click'
      >
        <MegaMenu />
      </MenuInnerWithSub>
      {/* {menuItems.map(item => 
        <MenuItem key={item.id} title={item.menuItem} to={"/"+item.menuTo} />
      )} */}

      {/* <MenuItem title='Home' to='/dashboard' />
      <MenuItem title='Reconcilation' to='/builder' />
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
export default MenuInner
// const mapStateToProps = (props: any) => {
//   return {
//     role: props.permission,
//     item: props.menuItem
//   }
// };
// export default connect(mapStateToProps)(MenuInner);