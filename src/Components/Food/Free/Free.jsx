import React from 'react';
import Card from '../../Card/Card';
import Free_1 from "../../images/free-1.jpg";
import Free_2 from "../../images/free-2.jpg";
import Free_3 from "../../images/free-3.jpg";
import Free_4 from "../../images/free-4.jpg";
import Free_5 from "../../images/free-5.jpg";
import Free_6 from "../../images/free-6.jpg";
import Free_7 from "../../images/free-7.jpg";
import Free_8 from "../../images/free-8.jpg";
import Free_9 from "../../images/free-9.jpg";
import { useTranslation } from 'react-i18next';

const Free = () => {
  const { t } = useTranslation();

  const freeData = [
    { img: Free_1, title: t('Free.Free__title_1'), text: t('free.free__text_1') },
    { img: Free_2, title: t('Free.Free__title_2'), text: t('free.free__text_2') },
    { img: Free_3, title: t('Free.Free__title_3'), text: t('free.free__text_3') },
    { img: Free_4, title: t('Free.Free__title_4'), text: t('free.free__text_4') },
    { img: Free_5, title: t('Free.Free__title_5'), text: t('free.free__text_5') },
    { img: Free_6, title: t('Free.Free__title_6'), text: t('free.free__text_6') },
    { img: Free_7, title: t('Free.Free__title_7'), text: t('free.free__text_7') },
    { img: Free_8, title: t('Free.Free__title_8'), text: t('free.free__text_8') },
    { img: Free_9, title: t('Free.Free__title_9'), text: t('free.free__text_9') },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-5">
      <div className="flex flex-wrap justify-center gap-[200px]">
        {freeData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Free;
