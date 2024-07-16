import React from 'react'
import "./Layout.css"
import { NavLink } from 'react-router-dom'
const Layout = () => {
  return (
    <div className='layout'>
      <div className='container layout-container'>
        <ul className='layout-list'>
          <li className='layout-item'><NavLink className='layout-link' to='/'>Lavash</NavLink></li>
          <li className='layout-item'><NavLink className='layout-link' to='/desert'>Desert</NavLink></li>
          <li className='layout-item'><NavLink className='layout-link' to='/set'>Set</NavLink></li>
          <li className='layout-item'><NavLink className='layout-link' to='/xagi'>Xagi</NavLink></li>
          <li className='layout-item'><NavLink className='layout-link' to='/burger'>Burger</NavLink></li>
          <li className='layout-item'><NavLink className='layout-link' to='/pizza'>Pizza</NavLink></li>
          <li className='layout-item'><NavLink className='layout-link' to='/sendvich'>Sendvich</NavLink></li>
          <li className='layout-item'><NavLink className='layout-link' to='/xoddog'>Xot-Dog</NavLink></li>
          <li className='layout-item'><NavLink className='layout-link' to='/free'>Free</NavLink></li>
          <li className='layout-item'><NavLink className='layout-link' to='/drink'>Drink</NavLink></li>
          <li className='layout-item'><NavLink className='layout-link' to='/salad'>Salad</NavLink></li>
          <li className='layout-item'><NavLink className='layout-link' to='/bread'>Bread</NavLink></li>
          <li className='layout-item'><NavLink className='layout-link' to='/sauke'>Sauce</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Layout
