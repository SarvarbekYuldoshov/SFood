import React from 'react'
import "./Layout.css"
import { NavLink } from 'react-router-dom'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
const Layout = () => {
  const { t,} = useTranslation();
  return (
    <div className='layout'>
      <div className='container layout-container'>
        <ul className='layout-list'>
          <li className='layout-item'><NavLink className='layout-link' to='/'>{t('layout.layout_1')}</NavLink></li>
          <li className='layout-item'><NavLink className='layout-link' to='/desert'>{t('layout.layout_2')}</NavLink></li>
          <li className='layout-item'><NavLink className='layout-link' to='/set'>{t('layout.layout_3')}</NavLink></li>
          <li className='layout-item'><NavLink className='layout-link' to='/xagi'>{t('layout.layout_4')}</NavLink></li>
          <li className='layout-item'><NavLink className='layout-link' to='/burger'>{t('layout.layout_5')}</NavLink></li>
          <li className='layout-item'><NavLink className='layout-link' to='/pizza'>{t('layout.layout_6')}</NavLink></li>
          <li className='layout-item'><NavLink className='layout-link' to='/sendvich'>{t('layout.layout_7')}</NavLink></li>
          <li className='layout-item'><NavLink className='layout-link' to='/xoddog'>{t('layout.layout_8')}</NavLink></li>
          <li className='layout-item'><NavLink className='layout-link' to='/free'>{t('layout.layout_9')}</NavLink></li>
          <li className='layout-item'><NavLink className='layout-link' to='/drink'>{t('layout.layout_10')}</NavLink></li>
          <li className='layout-item'><NavLink className='layout-link' to='/salad'>{t('layout.layout_11')}</NavLink></li>
          <li className='layout-item'><NavLink className='layout-link' to='/bread'>{t('layout.layout_12')}</NavLink></li>
          <li className='layout-item'><NavLink className='layout-link' to='/sauke'>{t('layout.layout_13')}</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Layout
