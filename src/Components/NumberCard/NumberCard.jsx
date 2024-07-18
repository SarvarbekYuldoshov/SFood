import React from 'react'
import "./NumberCard.css"
function NumberCard() {
  return (
    <div className='numbercard'>
      <div className='container numbercard-container'>
        <ul className='numbercard-list'>
            <li className='numbercard-item'>
                <h1 className='numbercard-title'>MaxWay Magic City</h1>
                <p className='numbercard-text'>Адрес: Magic City,ул. Бабура, 174, Ташкент, Узбекистан</p>
                <p className='numbercard-text'>Часы работы: 10:00-03:00</p>
                <p className='numbercard-text'>Номер телефона:+998 93 148 77 33</p>
                <p className='numbercard-text'>Ориентир: Magic City</p>
                <img className='numbercard-img' src="https://maxway.uz/images/Rectangle/max-way.png" alt="" />
            </li>
        </ul>
      </div>
    </div>
  )
}

export default NumberCard
