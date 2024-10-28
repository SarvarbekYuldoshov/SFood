import React from 'react'
import "./Menu.css"
import { Outlet } from 'react-router'
const Menu = () => {
  return (
    <div className='menu' >
      <div className='container menu-container'>
        <Outlet/>
        <p></p>
        <h1></h1>
      </div>
    </div>
  )
}

export default Menu

