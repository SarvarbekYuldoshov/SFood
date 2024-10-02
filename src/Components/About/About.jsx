import React from 'react'
import "./About.css"
import { useTranslation } from 'react-i18next'
const About = () => {
  return (
    <div className='about'>
      <div className='container about-container'>
        <ul className='about-list'>
          <li className='about-item'>
            <img className='about-img' src="https://test.limsa.uz/static/media/about.c0e48b35ff94335b9398.png" alt="" />
          </li>
        </ul>
           <h1 className='about-title'>{t('About.About__title')}</h1>
           <p className='about-text'>{t('about.about__text')}</p>
      </div>
    </div>
  )
}

export default About
