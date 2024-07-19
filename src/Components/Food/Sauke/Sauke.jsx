import React from 'react'
import "./Sauke.css"
import Card from '../../Card/Card'
import sauke_1 from  "../../images/sauke-1.jpg"
import sauke_2 from  "../../images/sauke-2.jpg"
import sauke_3 from  "../../images/sauke-3.jpg"
import sauke_4 from  "../../images/sauke-4.jpg"
import sauke_5 from  "../../images/sauke-5.jpg"
import sauke_6 from  "../../images/sauke-6.jpg"
import sauke_7 from  "../../images/sauke-7.jpg"
import sauke_8 from  "../../images/sauke-8.jpg"
import sauke_9 from  "../../images/sauke-3.jpg"
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
const Sauke = () => {
  const {t} = useTranslation();
  const sauke1 = {
    img:sauke_1,
    title:t('Sauke.Sauke__title_1'),
    text:t('sauke.sauke__text_1'),
  }
  const sauke2 = {
    img:sauke_2,
    title:t('Sauke.Sauke__title_2'),
    text:t('sauke.sauke__text_2'),
  }
  const sauke3 = {
    img:sauke_3,
    title:t('Sauke.Sauke__title_3'),
    text:t('sauke.sauke__text_3'),
  }
  const sauke4 = {
    img:sauke_4,
    title:t('Sauke.Sauke__title_4'),
    text:t('sauke.sauke__text_4'),
  }
  const sauke5 = {
    img:sauke_5,
    title:t('Sauke.Sauke__title_5'),
    text:t('sauke.sauke__text_5'),
  }
  const sauke6 = {
    img:sauke_6,
    title:t('Sauke.Sauke__title_6'),
    text:t('sauke.sauke__text_6'),
  }
  const sauke7 = {
    img:sauke_7,
    title:t('Sauke.Sauke__title_7'),
    text:t('sauke.sauke__text_7'),
  }
  const sauke8 = {
    img:sauke_8,
    title:t('Sauke.Sauke__title_8'),
    text:t('sauke.sauke__text_8'),
  }
  const sauke9 = {
    img:sauke_9,
    title:t('Sauke.Sauke__title_9'),
    text:t('sauke.sauke__text_9'),
  }
  return (
    <div className='sauke'>
      <div className='container sauke-container'>
        <Card data={sauke1}/>
        <Card data={sauke2}/>
        <Card data={sauke3}/>
        <Card data={sauke4}/>
        <Card data={sauke5}/>
        <Card data={sauke6}/>
        <Card data={sauke7}/>
        <Card data={sauke8}/>
        <Card data={sauke9}/>
      </div>
    </div>
  )
}

export default Sauke
