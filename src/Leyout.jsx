import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Component/Navber/Navbar'
// import Navbar from './Component/Navber/Navbar'

function Leyout() {
  return (
    <div>
        <Outlet />
        <Navbar />
    </div>
  )
}

export default Leyout