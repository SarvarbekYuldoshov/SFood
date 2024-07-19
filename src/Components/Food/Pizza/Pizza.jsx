import React from 'react'
import "./Pizza.css"
import Card from '../../Card/Card'
import pizza_1 from "../../images/pizza-1.jpg"
import pizza_2 from "../../images/pizza-2.jpg"
import pizza_3 from "../../images/pizza-3.jpg"
import pizza_4 from "../../images/pizza-4.jpg"
import pizza_5 from "../../images/pizza-5.jpg"
import pizza_6 from "../../images/pizza-6.jpg"
import pizza_7 from "../../images/pizza-7.jpg"
import pizza_8 from "../../images/pizza-8.jpg"
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
const Pizza = () => {
  const {t} = useTranslation();
  const pizza1 = {
    img:pizza_1,
    title:t('Pizza.Pizza__title_1'),
    text:t('pizza.pizza__text_1'),
  }
  const pizza2 = {
    img:pizza_2,
    title:t('Pizza.Pizza__title_2'),
    text:t('pizza.pizza__text_2'),
  }
  const pizza3 = {
    img:pizza_3,
    title:t('Pizza.Pizza__title_3'),
    text:t('pizza.pizza__text_3'),
  }
  const pizza4 = {
    img:pizza_4,
    title:t('Pizza.Pizza__title_4'),
    text:t('pizza.pizza__text_4'),
  }
  const pizza5 = {
    img:pizza_5,
    title:t('Pizza.Pizza__title_5'),
    text:t('pizza.pizza__text_5'),
  }
  const pizza6 = {
    img:pizza_6,
    title:t('Pizza.Pizza__title_6'),
    text:t('pizza.pizza__text_7'),
  }
  const pizza7 = {
    img:pizza_7,
    title:t('Pizza.Pizza__title_8'),
    text:t('pizza.pizza__text_8'),
  }
  const pizza8 = {
    img:pizza_8,
    title:t('Pizza.Pizza__title_9'),
    text:t('pizza.pizza__text_9'),
  }
  return (
    <div className='pizza'>
      <div className='container pizza-container'>
        <Card data={pizza1}/>
        <Card data={pizza2}/>
        <Card data={pizza3}/>
        <Card data={pizza4}/>
        <Card data={pizza5}/>
        <Card data={pizza6}/>
        <Card data={pizza7}/>
        <Card data={pizza8}/>
        <Card data={pizza1}/>
      </div>
    </div>
  )
}

export default Pizza
