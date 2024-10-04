import React from 'react';
import Card from '../../Card/Card';
import salad_1 from "../../images/salad-1.jpg";
import salad_2 from "../../images/salad-2.jpg";
import salad_3 from "../../images/salad-3.jpg";
import salad_4 from "../../images/salad-4.jpg";
import salad_5 from "../../images/salad-5.jpg";
import salad_6 from "../../images/salad-6.jpg";
import salad_7 from "../../images/salad-7.jpg";
import salad_8 from "../../images/salad-8.jpg";
import salad_9 from "../../images/salad-9.jpg";
import { useTranslation } from 'react-i18next';

const Salad = () => {
  const { t } = useTranslation();

  const saladData = [
    { img: salad_1, title: t('Salad.Salad__title_1'), text: t('salad.salad__text_1') },
    { img: salad_2, title: t('Salad.Salad__title_2'), text: t('salad.salad__text_2') },
    { img: salad_3, title: t('Salad.Salad__title_3'), text: t('salad.salad__text_3') },
    { img: salad_4, title: t('Salad.Salad__title_4'), text: t('salad.salad__text_4') },
    { img: salad_5, title: t('Salad.Salad__title_5'), text: t('salad.salad__text_5') },
    { img: salad_6, title: t('Salad.Salad__title_6'), text: t('salad.salad__text_6') },
    { img: salad_7, title: t('Salad.Salad__title_7'), text: t('salad.salad__text_7') },
    { img: salad_8, title: t('Salad.Salad__title_8'), text: t('salad.salad__text_8') },
    { img: salad_9, title: t('Salad.Salad__title_9'), text: t('salad.salad__text_9') },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-5">
      <div className="flex flex-wrap justify-center gap-[200px]">
        {saladData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Salad;
