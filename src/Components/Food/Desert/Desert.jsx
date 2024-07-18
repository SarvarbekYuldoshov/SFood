import React from 'react'
import "./Desert.css"
import Card from '../../Card/Card'
import deser_1 from "../../images/desert-1.jpg"
import deser_2 from "../../images/desert-2.jpg"
import deser_3 from "../../images/desert-3.jpg"
import deser_4 from "../../images/desert-4.jpg"
import deser_5 from "../../images/desert-5.jpg"
import deser_6 from "../../images/desert-6.jpg"
import deser_7 from "../../images/desert-7.jpg"
import deser_8 from "../../images/desert-8.jpg"
import deser_9 from "../../images/desert-9.jpg"
import { useTranslation } from 'react-i18next'
const Desert = () => {
  const {t} = useTranslation();
  const desert1 = {
    img:deser_1,
    title:t('Desert.Desert__title_1'),
    text:t('desert.desert__text_1'),
  }
  const desert2 = {
    img:deser_2,
    title:t('Desert.Desert__title_2'),
    text:t('desert.desert__text_2'),
  }
  const desert3 = {
    img:deser_3,
    title:t('Desert.Desert__title_3'),
    text:t('desert.desert__text_3'),
  }
  const desert4 = {
    img:deser_4,
    title:t('Desert.Desert__title_4'),
    text:t('desert.desert__text_4'),
  }
  const desert5 = {
    img:deser_5,
    title:t('Desert.Desert__title_5'),
    text:t('desert.desert__text_5'),
  }
  const desert6 = {
    img:deser_6,
    title:t('Desert.Desert__title_6'),
    text:t('desert.desert__text_6'),
  }
  const desert7 = {
    img:deser_7,
    title:t('Desert.Desert__title_7'),
    text:t('desert.desert__text_7'),
  }
  const desert8 = {
    img:deser_8,
    title:t('Desert.Desert__title_8'),
    text:t('desert.desert__text_8'),
  }
  const desert9 = {
    img:deser_9,
    title:t('Desert.Desert__title_9'),
    text:t('desert.desert__text_9'),
  }
  return (
    <div className='desert'>
      <div className='container desert-container'>
          <Card data={desert1}/>
          <Card data={desert2}/>
          <Card data={desert3}/>
          <Card data={desert4}/>
          <Card data={desert5}/>
          <Card data={desert6}/>
          <Card data={desert7}/>
          <Card data={desert8}/>
          <Card data={desert9}/>
      </div>
    </div>
  )
}

export default Desert
