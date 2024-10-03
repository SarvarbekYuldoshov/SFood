import React from 'react'
import Card from '../../Card/Card'
import deser_1 from "../../images/desert-1.jpg"
import deser_2 from "../../images/desert-2.jpg"
import deser_3 from "../../images/desert-3.jpg"
import deser_4 from "../../images/desert-4.jpg"
import deser_5 from "../../images/desert-5.jpg"
import deser_6 from "../../images/desert-6.jpg"
import deser_7 from "../../images/desert-7.jpg"
import deser_8 from "../../images/desert-8.jpg"
import deser_9 from "../../images/desert-9.jpg"
import { useTranslation } from 'react-i18next'

const Desert = () => {
  const { t } = useTranslation();

  const desertData = [
    { img: deser_1, title: t('Desert.Desert__title_1'), text: t('desert.desert__text_1') },
    { img: deser_2, title: t('Desert.Desert__title_2'), text: t('desert.desert__text_2') },
    { img: deser_3, title: t('Desert.Desert__title_3'), text: t('desert.desert__text_3') },
    { img: deser_4, title: t('Desert.Desert__title_4'), text: t('desert.desert__text_4') },
    { img: deser_5, title: t('Desert.Desert__title_5'), text: t('desert.desert__text_5') },
    { img: deser_6, title: t('Desert.Desert__title_6'), text: t('desert.desert__text_6') },
    { img: deser_7, title: t('Desert.Desert__title_7'), text: t('desert.desert__text_7') },
    { img: deser_8, title: t('Desert.Desert__title_8'), text: t('desert.desert__text_8') },
    { img: deser_9, title: t('Desert.Desert__title_9'), text: t('desert.desert__text_9') },
  ];

  return (
    <div className='desert max-w-[1200px] mx-auto py-8'>
      <div className='container flex flex-wrap justify-center gap-[200px]'>
        {desertData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  )
}

export default Desert
