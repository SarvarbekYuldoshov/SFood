import React from 'react'
import "./Salad.css"
import Card from '../../Card/Card'
import salad_1 from "../../images/salad-1.jpg"
import salad_2 from "../../images/salad-2.jpg"
import salad_3 from "../../images/salad-3.jpg"
import salad_4 from "../../images/salad-4.jpg"
import salad_5 from "../../images/salad-5.jpg"
import salad_6 from "../../images/salad-6.jpg"
import salad_7 from "../../images/salad-7.jpg"
import salad_8 from "../../images/salad-8.jpg"
import salad_9 from "../../images/salad-9.jpg"
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
const Salad = () => {
  const {t} = useTranslation();
  const salad1 = {
    img:salad_1,
    title:t('Salad.Salad__title_1'),
    text:t('salad.salad__text_1'),
  }
  const salad2 = {
    img:salad_2,
    title:t('Salad.Salad__title_2'),
    text:t('salad.salad__text_2'),
  }
  const salad3 = {
    img:salad_3,
    title:t('Salad.Salad__title_3'),
    text:t('salad.salad__text_3'),
  }
  const salad4 = {
    img:salad_4,
    title:t('Salad.Salad__title_4'),
    text:t('salad.salad__text_4'),
  }
  const salad5 = {
    img:salad_5,
    title:t('Salad.Salad__title_5'),
    text:t('salad.salad__text_5'),
  }
  const salad6 = {
    img:salad_6,
    title:t('Salad.Salad__title_6'),
    text:t('salad.salad__text_6'),
  }
  const salad7 = {
    img:salad_7,
    title:t('Salad.Salad__title_7'),
    text:t('salad.salad__text_7'),
  }
  const salad8 = {
    img:salad_8,
    title:t('Salad.Salad__title_8'),
    text:t('salad.salad__text_8'),
  }
  const salad9 = {
    img:salad_9,
    title:t('Salad.Salad__title_9'),
    text:t('salad.salad__text_9'),
  }
  return (
    <div className='salad'>
      <div className='container salad-container'>
        <Card data={salad1}/>
        <Card data={salad2}/>
        <Card data={salad3}/>
        <Card data={salad4}/>
        <Card data={salad5}/>
        <Card data={salad6}/>
        <Card data={salad7}/>
        <Card data={salad8}/>
        <Card data={salad9}/>
      </div>
    </div>
  )
}

export default Salad
