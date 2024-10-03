import React from 'react';
import "./Xoddog.css";
import Card from '../../Card/Card';
import xodog1 from "../../images/xoddog-1.jpg";
import xodog2 from "../../images/xoddog-2.jpg";
import xodog3 from "../../images/xoddog-3.jpg";
import xodog4 from "../../images/xoddog-4.jpg";
import xodog5 from "../../images/xoddog-5.jpg";
import xodog6 from "../../images/xoddog-6.jpg";
import xodog7 from "../../images/xoddog-7.jpg";
import xodog8 from "../../images/xoddog-8.jpg";
import xodog9 from "../../images/xoddog-9.jpg";
import { useTranslation } from 'react-i18next';

const Xoddog = () => {
  const { t } = useTranslation();

  const xoddogData = [
    { img: xodog1, title: t('Xodog.Xodog__title_1'), text: t('xodog.xodog__text_1') },
    { img: xodog2, title: t('Xodog.Xodog__title_2'), text: t('xodog.xodog__text_2') },
    { img: xodog3, title: t('Xodog.Xodog__title_3'), text: t('xodog.xodog__text_3') },
    { img: xodog4, title: t('Xodog.Xodog__title_4'), text: t('xodog.xodog__text_4') },
    { img: xodog5, title: t('Xodog.Xodog__title_5'), text: t('xodog.xodog__text_5') },
    { img: xodog6, title: t('Xodog.Xodog__title_6'), text: t('xodog.xodog__text_6') },
    { img: xodog7, title: t('Xodog.Xodog__title_7'), text: t('xodog.xodog__text_7') },
    { img: xodog8, title: t('Xodog.Xodog__title_8'), text: t('xodog.xodog__text_8') },
    { img: xodog9, title: t('Xodog.Xodog__title_9'), text: t('xodog.xodog__text_9') },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-5">
      <div className="flex flex-wrap justify-center gap-[200px]">
        {xoddogData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Xoddog;
