import React from 'react'
import "./Number.css"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const Number = () => {
  const {t} = useTranslation();
  return (
    <div className='number'>
      <div className='container number-container'>

{/* ----------------------------------------------------------------------------------------------------------------------- */}

       <Link to="/numbercard"> 
       <ul className='number-list'>
          <li className='number-item'>
            <h1 className='number-title'>{t('Number.Number__title_1')}</h1>
            <p className='number-text'>{t('number.number__text_1')}</p>
          </li>
          <li className='number-item'>
            <p className='number-text-a'>{t('number.number__text_4')}</p>
            <p className='number-text'>{t('number.number__text_7')}</p>
          </li>
        </ul>
        </Link>

{/* ----------------------------------------------------------------------------------------------------------------------- */}

        <Link to="/numbercard"> 
        <ul className='number-list'>
          <li className='number-item'>
          <h1 className='number-title'>{t('Number.Number__title_2')}</h1>
            <p className='number-text'>{t('number.number__text_2')}</p>
          </li>
          <li className='number-item'>
            <p className='number-text-a'>{t('number.number__text_5')}</p>
            <p className='number-text'>{t('number.number__text_8')}</p>
          </li>
        </ul>
        </Link>

{/* ---------------------------------------------------------------------------------------------------------------------- */}

        <Link to="/numbercard"> 
        <ul className='number-list'>
          <li className='number-item'>
            <h1 className='number-title'>{t('Number.Number__title_3')}</h1>
            <p className='number-text'>{t('number.number__text_3')}</p>
          </li>
          <li className='number-item'>
            <p className='number-text-a'>{t('number.number__text_6')}</p>
            <p className='number-text'>{t('number.number__text_9')}</p>
          </li>
        </ul>
        </Link>
      </div>
    </div>
  )
}

export default Number
