import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Charts} from './components/Charts'
import {Feeds} from './components/Feeds'
import {Lists} from './components/Lists'
import {Tables} from './components/Tables'
import {Mixed} from './components/Mixed'
import {Statistics} from './components/Statistics'
import { UserTables } from './components/userTables'
import { RoleTables } from './components/roleTables'
import { TenantTables } from './components/tenantTable'
import { ConsultantTables } from './components/consultantTables'

const widgetsBreadCrumbs: Array<PageLink> = [
  {
    title: 'Widgets',
    path: '/crafted/widgets/charts',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const WidgetsPage: React.FC = () => {
  return (
    <Switch>
      <Route path='/crafted/widgets/charts'>
        <PageTitle breadcrumbs={widgetsBreadCrumbs}>Charts</PageTitle>
        <Charts />
      </Route>
      <Route path='/crafted/widgets/feeds'>
        <PageTitle breadcrumbs={widgetsBreadCrumbs}>Feeds</PageTitle>
        <Feeds />
      </Route>
      <Route path='/crafted/widgets/lists'>
        <PageTitle breadcrumbs={widgetsBreadCrumbs}>Lists</PageTitle>
        <Lists />
      </Route>
      <Route path='/crafted/widgets/mixed'>
        <PageTitle breadcrumbs={widgetsBreadCrumbs}>Mixed</PageTitle>
        <Mixed />
      </Route>
      <Route path='/crafted/widgets/tables'>
        <PageTitle breadcrumbs={widgetsBreadCrumbs}>Tables</PageTitle>
        <Tables />
      </Route>
      <Route path='/setting/user'>
        <PageTitle breadcrumbs={widgetsBreadCrumbs}>userTables</PageTitle>
        <UserTables />
      </Route>
      <Route path='/setting/role'>
        <PageTitle breadcrumbs={widgetsBreadCrumbs}>roleTables</PageTitle>
        <RoleTables />
      </Route>
      <Route path='/setting/tenant'>
        <PageTitle breadcrumbs={widgetsBreadCrumbs}>tenantTables</PageTitle>
        <TenantTables />
      </Route>
      <Route path='/setting/consultant'>
        <PageTitle breadcrumbs={widgetsBreadCrumbs}>consultantTables</PageTitle>
        <ConsultantTables />
      </Route>
      <Route path='/crafted/widgets/statistics'>
        <PageTitle breadcrumbs={widgetsBreadCrumbs}>Statiscics</PageTitle>
        <Statistics />
      </Route>
      <Redirect from='/crafted/widgets' exact={true} to='/crafted/widgets/lists' />
      <Redirect to='/crafted/widgets/lists' />
    </Switch>
  )
}

export default WidgetsPage
