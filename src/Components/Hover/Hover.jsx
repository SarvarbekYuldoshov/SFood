import React from 'react'
import "./Hover.css"
const Hover = () => {
  return (
    <div className='hover'>
      <div className='container hover-container'>
        <ul className='hover-list'>
          <h1 className='hover-title'>Телефоны контактных центров</h1>
          <p className='hover-text'>Круглосуточно, без выходных</p>
          <li className='hover-item'>
          <p className='hover-text'>Ташкент</p>
          <p className='hover-text-a'>+998931487733</p>
          </li>
          <hr className='hover-hr' />
          <li className='hover-item'>
          <p className='hover-text'>Наманган</p>
          <p className='hover-text-a'>+998993253304</p>
          </li>
          <hr className='hover-hr' />
          <li className='hover-item'>
          <p className='hover-text'>Алмалык</p>
          <p className='hover-text-a'>+998931487777</p>
          </li>
          <hr className='hover-hr' />
        </ul>
        <ul className='hover-list'>
          <h2 className='hover-title'>Отдел поддержки клиентов</h2>
          <li className='hover-item'>
            <p className='hover-text'>Электронная почта</p>
            <p className='hover-text-a'>sarvarbekyuldoshov85@gmail.com</p>
          </li>
          <hr className='hover-hr' />
          <li className='hover-item'>
            <p className='hover-text'>Контактный телефон</p>
            <p className='hover-text-a'>+998935010770</p>
          </li>
          <hr className='hover-hr' />
        </ul>
        <ul className='hover-list'>
          <h3 className='hover-title'>Правообладателям</h3>
          <p className='hover-text'>По вопросам, возникшим в связи с предположительным неправомерным использованием товарных знаков, логотипов и иных материалов, просим обращаться по е-мейлу с приложением подтверждающих документов</p>
          <li className='hover-item'>
            <p className='hover-text'>Электронная почта</p>
            <p className='hover-text-a'>sarvarbekyuldoshov85@gmail.com</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Hover
