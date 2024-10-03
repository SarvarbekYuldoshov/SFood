import React from 'react'
import Card from '../../Card/Card'
import xagi1 from "../../images/xagi-1.jpg"
import xagi2 from "../../images/xagi-2.jpg"
import xagi3 from "../../images/xagi-3.jpg"
import xagi4 from "../../images/xagi-4.jpg"
import xagi5 from "../../images/xagi-5.jpg"
import xagi6 from "../../images/xagi-6.jpg"
import xagi7 from "../../images/xagi-7.jpg"
import xagi8 from "../../images/xagi-8.jpg"
import xagi9 from "../../images/xagi-9.jpg"
import { useTranslation } from 'react-i18next'

const Xagi = () => {
  const { t } = useTranslation();

  const xaggiData = [
    { img: xagi1, title: t('Xaggi.Xaggi__title_1'), text: t('xaggi.xaggi__text_1') },
    { img: xagi2, title: t('Xaggi.Xaggi__title_2'), text: t('xaggi.xaggi__text_2') },
    { img: xagi3, title: t('Xaggi.Xaggi__title_3'), text: t('xaggi.xaggi__text_3') },
    { img: xagi4, title: t('Xaggi.Xaggi__title_4'), text: t('xaggi.xaggi__text_4') },
    { img: xagi5, title: t('Xaggi.Xaggi__title_5'), text: t('xaggi.xaggi__text_5') },
    { img: xagi6, title: t('Xaggi.Xaggi__title_6'), text: t('xaggi.xaggi__text_6') },
    { img: xagi7, title: t('Xaggi.Xaggi__title_7'), text: t('xaggi.xaggi__text_7') },
    { img: xagi8, title: t('Xaggi.Xaggi__title_8'), text: t('xaggi.xaggi__text_8') },
    { img: xagi9, title: t('Xaggi.Xaggi__title_9'), text: t('xaggi.xaggi__text_9') },
  ];

  return (
    <div className='xagi max-w-[1200px] mx-auto py-8'>
      <div className='container flex flex-wrap justify-center gap-[200px]'>
        {xaggiData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  )
}

export default Xagi;
