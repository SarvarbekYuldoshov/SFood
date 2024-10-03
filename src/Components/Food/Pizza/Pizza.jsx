import React from 'react'
import Card from '../../Card/Card'
import pizza_1 from "../../images/pizza-1.jpg"
import pizza_2 from "../../images/pizza-2.jpg"
import pizza_3 from "../../images/pizza-3.jpg"
import pizza_4 from "../../images/pizza-4.jpg"
import pizza_5 from "../../images/pizza-5.jpg"
import pizza_6 from "../../images/pizza-6.jpg"
import pizza_7 from "../../images/pizza-7.jpg"
import pizza_8 from "../../images/pizza-8.jpg"
import { useTranslation } from 'react-i18next'

const Pizza = () => {
  const { t } = useTranslation();

  const pizzaData = [
    { img: pizza_1, title: t('Pizza.Pizza__title_1'), text: t('pizza.pizza__text_1') },
    { img: pizza_2, title: t('Pizza.Pizza__title_2'), text: t('pizza.pizza__text_2') },
    { img: pizza_2, title: t('Pizza.Pizza__title_2'), text: t('pizza.pizza__text_2') },
    { img: pizza_3, title: t('Pizza.Pizza__title_3'), text: t('pizza.pizza__text_3') },
    { img: pizza_4, title: t('Pizza.Pizza__title_4'), text: t('pizza.pizza__text_4') },
    { img: pizza_5, title: t('Pizza.Pizza__title_5'), text: t('pizza.pizza__text_5') },
    { img: pizza_6, title: t('Pizza.Pizza__title_6'), text: t('pizza.pizza__text_6') },
    { img: pizza_7, title: t('Pizza.Pizza__title_7'), text: t('pizza.pizza__text_7') },
    { img: pizza_8, title: t('Pizza.Pizza__title_8'), text: t('pizza.pizza__text_8') },
  ];

  return (
    <div className='pizza max-w-[1200px] mx-auto py-8'>
      <div className='container flex flex-wrap justify-center gap-[200px]'>
        {pizzaData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  )
}

export default Pizza;
