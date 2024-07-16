import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
      <div className='container header-container'>
        <ul className='header-list'>
          <li className='header-item'><a className='header-link-a' href="#">SFood</a></li>
          <li className='header-item'><NavLink className="header-link" active to='/'>Главная</NavLink></li>
          <li className='header-item'><NavLink className="header-link" active to='/number'>Филиалы</NavLink></li>
          <li className='header-item'><NavLink className="header-link" active to="/about">О нас</NavLink></li>
          <li className='header-item'><NavLink className="header-link" active to="/hover">Контакт</NavLink></li>
        </ul>
        <ul className='header-list'>
        <a className='header-link-b' href="#"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg></a>
        <button className='header-btn'to='/button'>Войти</button>
        </ul>
      </div>
    </div>
  )
}

export default Header

