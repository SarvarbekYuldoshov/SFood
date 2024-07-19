import React from 'react'
import "./Free.css"
import Card from '../../Card/Card'
import Free_1 from "../../images/free-1.jpg"
import Free_2 from "../../images/free-2.jpg"
import Free_3 from "../../images/free-3.jpg"
import Free_4 from "../../images/free-4.jpg"
import Free_5 from "../../images/free-5.jpg"
import Free_6 from "../../images/free-6.jpg"
import Free_7 from "../../images/free-7.jpg"
import Free_8 from "../../images/free-8.jpg"
import Free_9 from "../../images/free-9.jpg"
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
const Free = () => {
  const {t} = useTranslation();
  const free1 = {
    img:Free_1,
    title:t('Free.Free__title_1'),
    text:t('free.free__text_1'),
  }
  const free2 = {
    img:Free_2,
    title:t('Free.Free__title_2'),
    text:t('free.free__text_2'),
  }
  const free3 = {
    img:Free_3,
    title:t('Free.Free__title_3'),
    text:t('free.free__text_3'),
  }
  const free4 = {
    img:Free_4,
    title:t('Free.Free__title_4'),
    text:t('free.free__text_4'),
  }
  const free5 = {
    img:Free_5,
    title:t('Free.Free__title_5'),
    text:t('free.free__text_5'),
  }
  const free6 = {
    img:Free_6,
    title:t('Free.Free__title_6'),
    text:t('free.free__text_6'),
  }
  const free7 = {
    img:Free_7,
    title:t('Free.Free__title_7'),
    text:t('free.free__text_7'),
  }
  const free8 = {
    img:Free_8,
    title:t('Free.Free__title_8'),
    text:t('free.free__text_8'),
  }
  const free9 = {
    img:Free_9,
    title:t('Free.Free__title_9'),
    text:t('free.free__text_9'),
  }
  return (
    <div className='free'>
      <div className='container free-container'>
         <Card data={free1}/>
         <Card data={free2}/>
         <Card data={free3}/>
         <Card data={free4}/>
         <Card data={free5}/>
         <Card data={free6}/>
         <Card data={free7}/>
         <Card data={free8}/>
         <Card data={free9}/>
      </div>
    </div>
  )
}

export default Free
