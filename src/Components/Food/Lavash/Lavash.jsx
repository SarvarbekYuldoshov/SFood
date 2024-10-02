import React from 'react'
import "./Lavash.css"
import Card from '../../Card/Card'
import Rasm1 from "../../images/lavash1.webp"
import Rasm2 from "../../images/lavash2.webp"
import Rasm3 from "../../images/lavash3.jpg"
import Rasm4 from "../../images/lavash4.jpg"
import Rasm5 from "../../images/lavash5.jpg"
import Rasm6 from "../../images/lavash6.jpg"
import Rasm7 from "../../images/lavash7.jpg"
import Rasm8 from "../../images/lavash8.jpg"
import Rasm9 from "../../images/lavash9.jpg"


import { useTranslation } from 'react-i18next'

const Lavash = () => {
  const {t} = useTranslation();
  const Data1 = {
    img:Rasm1,
    title:t('lavash.lavash__title_1'),
    text:t('Lavash.Lavash__text_1'),
  }
  const Data2 = {
    img:Rasm2,
    title:t('lavash.lavash__title_2'),
    text:t('Lavash.Lavash__text_2'),
  }
  const Data3 = {
    img:Rasm3,
    title:t('lavash.lavash__title_3'),
    text:t('Lavash.Lavash__text_3'),
  }
  const Data4 = {
    img:Rasm4,
    title:t('lavash.lavash__title_4'),
    text:t('Lavash.Lavash__text_4'),
  }
  const Data5 = {
    img:Rasm5,
    title:t('lavash.lavash__title_5'),
    text:t('Lavash.Lavash__text_5'),
  }
  const Data6 = {
    img:Rasm6,
    title:t('lavash.lavash__title_6'),
    text:t('Lavash.Lavash__text_6'),
  }
  const Data7 = {
    img:Rasm7,
    title:t('lavash.lavash__title_7'),
    text:t('Lavash.Lavash__text_7'),
  }
  const Data8 = {
    img:Rasm8,
    title:t('lavash.lavash__title_8'),
    text:t('Lavash.Lavash__text_8'),
  }
  const Data9 = {
    img:Rasm9,
    title:t('lavash.lavash__title_9'),
    text:t('Lavash.Lavash__text_9'),
  }
  return (
    <div className='lavash'>
      <div className='container lavash-container'>
        <Card data = {Data1}/>
        <Card data = {Data2}/>
        <Card data = {Data3}/>
        <Card data = {Data4}/>
        <Card data = {Data5}/>
        <Card data = {Data6}/>
        <Card data = {Data7}/>
        <Card data = {Data8}/>
        <Card data = {Data9}/>
      </div>
    </div>
  )
}

export default Lavash

