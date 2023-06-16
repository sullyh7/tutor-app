import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './containers/navbar/Navbar'
import Footer from './containers/footer/Footer'

const Root = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Root