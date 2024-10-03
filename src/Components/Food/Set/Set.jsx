import React from 'react'
import Card from '../../Card/Card'
import seta_1 from "../../images/set-1.jpg"
import seta_2 from "../../images/set-2.jpg"
import seta_3 from "../../images/set-3.jpg"
import seta_4 from "../../images/set-4.jpg"
import seta_5 from "../../images/set-5.jpg"
import seta_6 from "../../images/set-6.jpg"
import seta_7 from "../../images/set-7.jpg"
import seta_8 from "../../images/set-8.jpg"
import seta_9 from "../../images/set-9.jpg"
import { useTranslation } from 'react-i18next'

const Set = () => {
  const { t } = useTranslation();

  const setData = [
    { img: seta_1, title: t('Set.Set__title_1'), text: t('set.set__text_1') },
    { img: seta_2, title: t('Set.Set__title_2'), text: t('set.set__text_2') },
    { img: seta_3, title: t('Set.Set__title_3'), text: t('set.set__text_3') },
    { img: seta_4, title: t('Set.Set__title_4'), text: t('set.set__text_4') },
    { img: seta_5, title: t('Set.Set__title_5'), text: t('set.set__text_5') },
    { img: seta_6, title: t('Set.Set__title_6'), text: t('set.set__text_6') },
    { img: seta_7, title: t('Set.Set__title_7'), text: t('set.set__text_7') },
    { img: seta_8, title: t('Set.Set__title_8'), text: t('set.set__text_8') },
    { img: seta_9, title: t('Set.Set__title_9'), text: t('set.set__text_9') },
  ];

  return (
    <div className='set max-w-[1200px] mx-auto py-8'>
      <div className='container flex flex-wrap justify-center gap-[200px]'>
        {setData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  )
}

export default Set
