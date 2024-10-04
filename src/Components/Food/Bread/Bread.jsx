import React from 'react';
import Card from '../../Card/Card';
import foto_1 from "../../images/foto-1.jpg";
import foto_2 from "../../images/foto-2.jpg";
import foto_3 from "../../images/foto-3.jpg";
import foto_4 from "../../images/foto-4.jpg";
import foto_5 from "../../images/foto-5.jpg";
import foto_6 from "../../images/foto-6.jpg";
import foto_7 from "../../images/foto-8.jpg";
import foto_8 from "../../images/foto-9.jpg";
import { useTranslation } from 'react-i18next';

const Bread = () => {
  const { t } = useTranslation();

  const breadData = [
    { img: foto_1, title: t('Bread.Bread__title_1'), text: t('bread.bread__text_1') },
    { img: foto_2, title: t('Bread.Bread__title_2'), text: t('bread.bread__text_2') },
    { img: foto_3, title: t('Bread.Bread__title_3'), text: t('bread.bread__text_3') },
    { img: foto_4, title: t('Bread.Bread__title_4'), text: t('bread.bread__text_4') },
    { img: foto_5, title: t('Bread.Bread__title_5'), text: t('bread.bread__text_5') },
    { img: foto_6, title: t('Bread.Bread__title_6'), text: t('bread.bread__text_6') },
    { img: foto_7, title: t('Bread.Bread__title_7'), text: t('bread.bread__text_7') },
    { img: foto_8, title: t('Bread.Bread__title_8'), text: t('bread.bread__text_8') },
    { img: foto_1, title: t('Bread.Bread__title_9'), text: t('bread.bread__text_9') },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-5">
      <div className="flex flex-wrap justify-center gap-[200px]">
        {breadData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Bread;
