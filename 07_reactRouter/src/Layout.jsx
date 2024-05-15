//we want that the header and footer remains constant at every page
import React from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'
// outlet will only change the elements in outlet and the remaining layout will remain constant

function Layout() {
    return (
      <>
      <Header/>
      <Outlet />
      <Footer />
      </>
    )
  }
  
  export default Layout