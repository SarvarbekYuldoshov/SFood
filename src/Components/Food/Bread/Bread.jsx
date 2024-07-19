import React from 'react'
import "./Bread.css"
import Card from '../../Card/Card'
import foto_1 from "../../images/foto-1.jpg"
import foto_2 from "../../images/foto-2.jpg"
import foto_3 from "../../images/foto-3.jpg"
import foto_4 from "../../images/foto-4.jpg"
import foto_5 from "../../images/foto-5.jpg"
import foto_6 from "../../images/foto-6.jpg"
import foto_7 from "../../images/foto-8.jpg"
import foto_8 from "../../images/foto-9.jpg"
import { useTranslation } from 'react-i18next'
const Bread = () => {
  const {t} = useTranslation();
  const bread_1 = {
    img:foto_1,
    title:t('Bread.Bread__title_1'),
    text:t('bread.bread__text_1'),
  }
  const bread_2 = {
    img:foto_2,
    title:t('Bread.Bread__title_2'),
    text:t('bread.bread__text_2'),
  }
  const bread_3 = {
    img:foto_3,
    title:t('Bread.Bread__title_3'),
    text:t('bread.bread__text_3'),
  }
  const bread_4 = {
    img:foto_4,
    title:t('Bread.Bread__title_4'),
    text:t('bread.bread__text_4'),
  }
  const bread_5 = {
    img:foto_5,
    title:t('Bread.Bread__title_5'),
    text:t('bread.bread__text_5'),
  }
  const bread_6 = {
    img:foto_6,
    title:t('Bread.Bread__title_6'),
    text:t('bread.bread__text_6'),
  }
  const bread_7 = {
    img:foto_7,
    title:t('Bread.Bread__title_7'),
    text:t('bread.bread__text_7'),
  }
  const bread_8 = {
    img:foto_8,
    title:t('Bread.Bread__title_8'),
    text:t('bread.bread__text_8'),
  }
  const bread_9 = {
    img:foto_1,
    title:t('Bread.Bread__title_9'),
    text:t('bread.bread__text_9'),
  }
  return (
    <div className='bread'>
      <div className='container bread-container'>
        <Card data={bread_1}/>
        <Card data={bread_2}/>
        <Card data={bread_3}/>
        <Card data={bread_4}/>
        <Card data={bread_5}/>
        <Card data={bread_6}/>
        <Card data={bread_7}/>
        <Card data={bread_8}/>
        <Card data={bread_9}/>
      </div>
    </div>
  )
}

export default Bread
