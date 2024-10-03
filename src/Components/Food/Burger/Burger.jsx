import React from 'react'
import burger_1 from "../../images/burger-1.jpg"
import burger_2 from "../../images/burger-2.jpg"
import burger_3 from "../../images/burger-3.jpg"
import burger_4 from "../../images/burger-4.jpg"
import burger_5 from "../../images/burger-5.jpg"
import burger_6 from "../../images/burger-6.jpg"
import burger_7 from "../../images/burger-7.jpg"
import burger_8 from "../../images/burger-8.jpg"
import Card from '../../Card/Card'
import { useTranslation } from 'react-i18next'

const Burger = () => {
  const { t } = useTranslation();

  const burgerData = [
    { img: burger_1, title: t('Burger.Burger__title_1'), text: t('burger.burger__text_1') },
    { img: burger_2, title: t('Burger.Burger__title_2'), text: t('burger.burger__text_2') },
    { img: burger_3, title: t('Burger.Burger__title_3'), text: t('burger.burger__text_3') },
    { img: burger_4, title: t('Burger.Burger__title_4'), text: t('burger.burger__text_4') },
    { img: burger_5, title: t('Burger.Burger__title_5'), text: t('burger.burger__text_5') },
    { img: burger_6, title: t('Burger.Burger__title_6'), text: t('burger.burger__text_6') },
    { img: burger_7, title: t('Burger.Burger__title_7'), text: t('burger.burger__text_7') },
    { img: burger_8, title: t('Burger.Burger__title_8'), text: t('burger.burger__text_8') },
    { img: burger_6, title: t('Burger.Burger__title_6'), text: t('burger.burger__text_6') },
  ];

  return (
    <div className='burger max-w-[1200px] mx-auto py-8'>
      <div className='container flex flex-wrap justify-center gap-[200px]'>
        {burgerData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  )
}

export default Burger;
