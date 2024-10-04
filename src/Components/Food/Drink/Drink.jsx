import React from 'react';
import Card from '../../Card/Card';
import drink_1 from "../../images/drink-1.jpg";
import drink_2 from "../../images/drink-2.jpg";
import drink_3 from "../../images/drink-3.jpg";
import drink_4 from "../../images/drink-4.jpg";
import drink_5 from "../../images/drink-5.jpg";
import drink_6 from "../../images/drink-6.jpg";
import drink_7 from "../../images/drink-7.jpg";
import drink_8 from "../../images/drink-8.jpg";
import { useTranslation } from 'react-i18next';

const Drink = () => {
  const { t } = useTranslation();

  const drinkData = [
    { img: drink_1, title: t('Drink.Drink__title_1'), text: t('drink.drink__text_1') },
    { img: drink_2, title: t('Drink.Drink__title_2'), text: t('drink.drink__text_2') },
    { img: drink_3, title: t('Drink.Drink__title_3'), text: t('drink.drink__text_3') },
    { img: drink_4, title: t('Drink.Drink__title_4'), text: t('drink.drink__text_4') },
    { img: drink_5, title: t('Drink.Drink__title_5'), text: t('drink.drink__text_5') },
    { img: drink_6, title: t('Drink.Drink__title_6'), text: t('drink.drink__text_6') },
    { img: drink_7, title: t('Drink.Drink__title_7'), text: t('drink.drink__text_7') },
    { img: drink_8, title: t('Drink.Drink__title_8'), text: t('drink.drink__text_8') },
    { img: drink_3, title: t('Drink.Drink__title_3'), text: t('drink.drink__text_3') },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-5">
      <div className="flex flex-wrap justify-center gap-[200px]">
        {drinkData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Drink;
