import React from 'react'
import "./Sendvich.css"
import Card from '../../Card/Card'
import sendvich_1 from "../../images/sendvich-1.jpg"
import sendvich_2 from "../../images/sendvich-2.jpg"
import sendvich_3 from "../../images/sendvich-3.jpg"
import sendvich_4 from "../../images/sendvich-4.jpg"
import sendvich_5 from "../../images/sendvich-5.jpg"
import sendvich_6 from "../../images/sendvich-6.jpg"
import sendvich_7 from "../../images/sendvich-7.jpg"
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
const Sendvich = () => {
  const {t} = useTranslation();
  const sendvich1 = {
    img:sendvich_1,
    title:t('Sendvich.Sendvich__title_1'),
    text:t('sendvich.sendvich__text_1'),
  }
  const sendvich2 = {
    img:sendvich_2,
    title:t('Sendvich.Sendvich__title_2'),
    text:t('sendvich.sendvich__text_2'),
  }
  const sendvich3 = {
    img:sendvich_3,
    title:t('Sendvich.Sendvich__title_3'),
    text:t('sendvich.sendvich__text_3'),
  }
  const sendvich4 = {
    img:sendvich_4,
    title:t('Sendvich.Sendvich__title_4'),
    text:t('sendvich.sendvich__text_4'),
  }
  const sendvich5 = {
    img:sendvich_5,
    title:t('Sendvich.Sendvich__title_5'),
    text:t('sendvich.sendvich__text_5'),
  }
  const sendvich6 = {
    img:sendvich_6,
    title:t('Sendvich.Sendvich__title_6'),
    text:t('sendvich.sendvich__text_6'),
  }
  const sendvich7 = {
    img:sendvich_7,
    title:t('Sendvich.Sendvich__title_7'),
    text:t('sendvich.sendvich__text_7'),
  }
  return (
    <div className='sendvich'>
      <div className='container sendvich-container'>
        <Card data={sendvich1}/>
        <Card data={sendvich2}/>
        <Card data={sendvich3}/>
        <Card data={sendvich4}/>
        <Card data={sendvich5}/>
        <Card data={sendvich6}/>
        <Card data={sendvich7}/>
        <Card data={sendvich1}/>
        <Card data={sendvich4}/>
      </div>
    </div>
  )
}

export default Sendvich
