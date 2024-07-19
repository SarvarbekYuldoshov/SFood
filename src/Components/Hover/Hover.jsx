import React from 'react'
import "./Hover.css"
import { useTranslation } from 'react-i18next';
const Hover = () => {
  const {t} = useTranslation();
  return (
    <div className='hover'>
      <div className='container hover-container'>
        <ul className='hover-list'>
          <h1 className='hover-title'>{t('Hover.Hover__title_1')}</h1>
          <p className='hover-text'>{t('Hover.Hover__text_1')}</p>
          <li className='hover-item'>
          <p className='hover-text'>{t('Hover.Hover__text_2')}</p>
          <p className='hover-text-a'>+998931487733</p>
          </li>
          <hr className='hover-hr' />
          <li className='hover-item'>
          <p className='hover-text'>{t('Hover.Hover__text_3')}</p>
          <p className='hover-text-a'>+998993253304</p>
          </li>
          <hr className='hover-hr' />
          <li className='hover-item'>
          <p className='hover-text'>{t('Hover.Hover__text_4')}</p>
          <p className='hover-text-a'>+998931487777</p>
          </li>
          <hr className='hover-hr' />
        </ul>
        <ul className='hover-list'>
        <h1 className='hover-title'>{t('Hover.Hover__title_2')}</h1>
          <li className='hover-item'>
          <p className='hover-text'>{t('Hover.Hover__text_5')}</p>
            <p className='hover-text-a'>sarvarbekyuldoshov85@gmail.com</p>
          </li>
          <hr className='hover-hr' />
          <li className='hover-item'>
          <p className='hover-text'>{t('Hover.Hover__text_6')}</p>
            <p className='hover-text-a'>+998935010770</p>
          </li>
          <hr className='hover-hr' />
        </ul>
        <ul className='hover-list'>
          <h1 className='hover-title'>{t('Hover.Hover__title_3')}</h1>
          <p className='hover-text'>{t('Hover.Hover__text_7')}</p>
          <li className='hover-item'>
          <p className='hover-text'>{t('Hover.Hover__text_8')}</p>
            <p className='hover-text-a'>sarvarbekyuldoshov85@gmail.com</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Hover
