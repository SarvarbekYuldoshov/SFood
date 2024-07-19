import React from 'react'
import "./Drink.css"
import Card from '../../Card/Card'
import drink_1 from "../../images/drink-1.jpg"
import drink_2 from "../../images/drink-2.jpg"
import drink_3 from "../../images/drink-3.jpg"
import drink_4 from "../../images/drink-4.jpg"
import drink_5 from "../../images/drink-5.jpg"
import drink_6 from "../../images/drink-6.jpg"
import drink_7 from "../../images/drink-7.jpg"
import drink_8 from "../../images/drink-8.jpg"
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
const Drink = () => {
  const {t} = useTranslation();
  const drin1 = {
    img:drink_1,
    title:t('Drink.Drink__title_1'),
    text:t('drink.drink__text_1'),
  }
  const drin2 = {
    img:drink_2,
    title:t('Drink.Drink__title_2'),
    text:t('drink.drink__text_2'),
  }
  const drin3 = {
    img:drink_3,
    title:t('Drink.Drink__title_3'),
    text:t('drink.drink__text_3'),
  }
  const drin4 = {
    img:drink_4,
    title:t('Drink.Drink__title_4'),
    text:t('drink.drink__text_4'),
  }
  const drin5 = {
    img:drink_5,
    title:t('Drink.Drink__title_5'),
    text:t('drink.drink__text_5'),
  }
  const drin6 = {
    img:drink_6,
    title:t('Drink.Drink__title_6'),
    text:t('drink.drink__text_6'),
  }
  const drin7 = {
    img:drink_7,
    title:t('Drink.Drink__title_7'),
    text:t('drink.drink__text_7'),
  }
  const drin8 = {
    img:drink_8,
    title:t('Drink.Drink__title_8'),
    text:t('drink.drink__text_8'),
  }
  return (
    <div className='drink'>
      <div className='container drink-container'>
         <Card data={drin1}/>
         <Card data={drin2}/>
         <Card data={drin3}/>
         <Card data={drin4}/>
         <Card data={drin5}/>
         <Card data={drin6}/>
         <Card data={drin7}/>
         <Card data={drin8}/>
         <Card data={drin1}/>
      </div>
    </div>
  )
}

export default Drink
