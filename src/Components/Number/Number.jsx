import React from 'react'
import "./Number.css"
import { Link } from 'react-router-dom'
const Number = () => {
  return (
    <div className='number'>
      <div className='container number-container'>
       <Link to="/numbercard"> 
       <ul className='number-list'>
          <li className='number-item'>
            <h1 className='number-title'>MaxWay Magic City</h1>
            <p className='number-text'>Magic City,ул. Бабура, 174, Ташкент, Узбекистан</p>
          </li>
          <li className='number-item'>
            <p className='number-text-a'>Часы работы</p>
            <p className='number-text'>10:00-03:00</p>
          </li>
        </ul>
        </Link>
        <Link to="/numbercard"> 
        <ul className='number-list'>
          <li className='number-item'>
            <h1 className='number-title'>MaxWay Tashkent City</h1>
            <p className='number-text'>Magic City, Navoiy, 26, Ташкент, Узбекистан</p>
          </li>
          <li className='number-item'>
            <p className='number-text-a'>Часы работы</p>
            <p className='number-text'>10:00-03:00</p>
          </li>
        </ul>
        </Link>
        <Link to="/numbercard"> 
        <ul className='number-list'>
          <li className='number-item'>
            <h1 className='number-title'>MaxWay Chilanzar City</h1>
            <p className='number-text'>Magic City,ул. Chilanzar, 3, Ташкент, Узбекистан</p>
          </li>
          <li className='number-item'>
            <p className='number-text-a'>Часы работы</p>
            <p className='number-text'>10:00-03:00</p>
          </li>
        </ul>
        </Link>
      </div>
    </div>
  )
}

export default Number
