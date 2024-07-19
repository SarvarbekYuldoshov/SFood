import React from 'react'
import "./Burger.css"
import burger_1 from "../../images/burger-1.jpg"
import burger_2 from "../../images/burger-2.jpg"
import burger_3 from "../../images/burger-3.jpg"
import burger_4 from "../../images/burger-4.jpg"
import burger_5 from "../../images/burger-5.jpg"
import burger_6 from "../../images/burger-6.jpg"
import burger_7 from "../../images/burger-7.jpg"
import burger_8 from "../../images/burger-8.jpg"
const Burger = () => {
  const  {t} = useTranslation();
  const burger1 = {
    img:burger_1,
    title:t('Burger.Burger__title_1'),
    text:t('burger.burger__text_1'),
  }
  const burger2 = {
    img:burger_2,
    title:t('Burger.Burger__title_2'),
    text:t('burger.burger__text_2'),
  }
  const burger3 = {
    img:burger_3,
    ttitle:t('Burger.Burger__title_3'),
    text:t('burger.burger__text_3'),
  }
  const burger4 = {
    img:burger_4,
    title:t('Burger.Burger__title_4'),
    text:t('burger.burger__text_4'),
  }
  const burger5 = {
    img:burger_5,
    title:t('Burger.Burger__title_5'),
    text:t('burger.burger__text_5'),
  }
  const burger6 = {
    img:burger_6,
    title:t('Burger.Burger__title_6'),
    text:t('burger.burger__text_6'),
  }
  const burger7 = {
    img:burger_7,
    title:t('Burger.Burger__title_7'),
    text:t('burger.burger__text_7'),
  }
  const burger8 = {
    img:burger_8,
    title:t('Burger.Burger__title_8'),
    text:t('burger.burger__text_8'),
  }
  return (
    <div className='burger'>
      <div className='container burger-container'>
          <Card data={burger1}/>
          <Card data={burger2}/>
          <Card data={burger3}/>
          <Card data={burger4}/>
          <Card data={burger5}/>
          <Card data={burger6}/>
          <Card data={burger7}/>
          <Card data={burger8}/>
          <Card data={burger1}/>
      </div>
    </div>
  )
}
import "./Burger.css"
import Card from '../../Card/Card'
import { useTranslation } from 'react-i18next'
export default Burger
