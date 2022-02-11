/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import React from 'react'
import {Link} from 'react-router-dom'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {useLayout} from '../../core'
import {Header} from './Header'
import {DefaultTitle} from './page-title/DefaultTitle'
import {Topbar} from './Topbar'

export function HeaderWrapper() {
  const {config, classes, attributes} = useLayout()
  const {header, aside} = config

  return (
    <div
      id='kt_header'
      className={clsx('header', 'align-items-stretch')}
      {...attributes.headerMenu}
      // className='header align-items-stretch'
    >
      {/* <div className='d-flex align-items-center flex-grow-1 flex-lg-grow-0'>
        <Link to='/' >
          <img alt='Logo' src={toAbsoluteUrl('/media/logos/logo-3.png')} className='h-35px' />
        </Link>
      </div> */}

      {/* begin::Wrapper */}
      <div className='d-flex align-items-stretch justify-content-between flex-lg-grow-1'>

        {/* begin::Navbar */}
          <div className='d-flex align-items-center flex-grow-1 flex-lg-grow-0 ps-10'>
            <Link to='/'>
              <img alt='Logo' src={toAbsoluteUrl('/media/logos/logo-3.png')} className='h-55px' />
            </Link>
          </div>

          <div className='d-flex align-items-stretch mt-5 ps-5' id='kt_header_nav'>
            <Header />
          </div>

        <div className='d-flex align-items-stretch flex-shrink-0'>
          <Topbar />
        </div>
      </div>
      {/* end::Wrapper */}
    </div>
  )
}
