import React from 'react'
import Card from '../../Card/Card'
import sendvich_1 from "../../images/sendvich-1.jpg"
import sendvich_2 from "../../images/sendvich-2.jpg"
import sendvich_3 from "../../images/sendvich-3.jpg"
import sendvich_4 from "../../images/sendvich-4.jpg"
import sendvich_5 from "../../images/sendvich-5.jpg"
import sendvich_6 from "../../images/sendvich-6.jpg"
import sendvich_7 from "../../images/sendvich-7.jpg"
import { useTranslation } from 'react-i18next'

const Sendvich = () => {
  const { t } = useTranslation();

  const sendvichData = [
    { img: sendvich_1, title: t('Sendvich.Sendvich__title_1'), text: t('sendvich.sendvich__text_1') },
    { img: sendvich_2, title: t('Sendvich.Sendvich__title_2'), text: t('sendvich.sendvich__text_2') },
    { img: sendvich_3, title: t('Sendvich.Sendvich__title_3'), text: t('sendvich.sendvich__text_3') },
    { img: sendvich_4, title: t('Sendvich.Sendvich__title_4'), text: t('sendvich.sendvich__text_4') },
    { img: sendvich_5, title: t('Sendvich.Sendvich__title_5'), text: t('sendvich.sendvich__text_5') },
    { img: sendvich_6, title: t('Sendvich.Sendvich__title_6'), text: t('sendvich.sendvich__text_6') },
    { img: sendvich_7, title: t('Sendvich.Sendvich__title_7'), text: t('sendvich.sendvich__text_7') },
    { img: sendvich_2, title: t('Sendvich.Sendvich__title_2'), text: t('sendvich.sendvich__text_2') },
    { img: sendvich_3, title: t('Sendvich.Sendvich__title_3'), text: t('sendvich.sendvich__text_3') },
  ];

  return (
    <div className='sendvich max-w-[1200px] mx-auto py-8'>
      <div className='container flex flex-wrap justify-center gap-[200px]'>
        {sendvichData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  );
}

export default Sendvich;
