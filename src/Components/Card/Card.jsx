import React from 'react'
import "./Card.css"
import Rasm_1 from "../images/rasm-1.jpg"
const Card = () => {
  return (
    <div className='card'>
      <div className='container card-container'>
        <ul className='card-list'>
        <img className='card-img' src={Rasm_1} alt="" />
        <h1 className='card-title'>burger</h1>
        <p className='card-text'>Lavash va taomlar</p>
        <li className='card-item'>
        <p className='card-text-a'>2.29 сум</p>
        <button className='card-btn'>Заказать</button>
        </li>
        </ul>
      </div>
    </div>
  )
}

export default Card

