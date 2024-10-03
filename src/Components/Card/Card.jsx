import React from 'react'
import "./Card.css"
const Card = ({data}) => {
  return (
    <div className='card'>
      <div className='container card-container'>
        <ul className='card-list'>
             <img className='card-img' src={data.img} alt="" />
             <h1 className='card-title'>{data.title}</h1>
             <p className='card-text'>{data.text}</p>
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

