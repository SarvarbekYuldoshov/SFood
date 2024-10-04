import React from 'react';
import Card from '../../Card/Card';
import sauke_1 from  "../../images/sauke-1.jpg";
import sauke_2 from  "../../images/sauke-2.jpg";
import sauke_3 from  "../../images/sauke-3.jpg";
import sauke_4 from  "../../images/sauke-4.jpg";
import sauke_5 from  "../../images/sauke-5.jpg";
import sauke_6 from  "../../images/sauke-6.jpg";
import sauke_7 from  "../../images/sauke-7.jpg";
import sauke_8 from  "../../images/sauke-8.jpg";
import sauke_9 from  "../../images/sauke-3.jpg";
import { useTranslation } from 'react-i18next';

const Sauke = () => {
  const { t } = useTranslation();

  const saukeData = [
    { img: sauke_1, title: t('Sauke.Sauke__title_1'), text: t('sauke.sauke__text_1') },
    { img: sauke_2, title: t('Sauke.Sauke__title_2'), text: t('sauke.sauke__text_2') },
    { img: sauke_3, title: t('Sauke.Sauke__title_3'), text: t('sauke.sauke__text_3') },
    { img: sauke_4, title: t('Sauke.Sauke__title_4'), text: t('sauke.sauke__text_4') },
    { img: sauke_5, title: t('Sauke.Sauke__title_5'), text: t('sauke.sauke__text_5') },
    { img: sauke_6, title: t('Sauke.Sauke__title_6'), text: t('sauke.sauke__text_6') },
    { img: sauke_7, title: t('Sauke.Sauke__title_7'), text: t('sauke.sauke__text_7') },
    { img: sauke_8, title: t('Sauke.Sauke__title_8'), text: t('sauke.sauke__text_8') },
    { img: sauke_9, title: t('Sauke.Sauke__title_9'), text: t('sauke.sauke__text_9') },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-5">
      <div className="flex flex-wrap justify-center gap-[200px]">
        {saukeData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Sauke;
