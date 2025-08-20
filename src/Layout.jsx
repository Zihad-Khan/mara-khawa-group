import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default Layout