import React from 'react'
import "./Sendvich.css"
import Card from '../../Card/Card'
import sendvich_1 from "../../images/sendvich-1.jpg"
import sendvich_2 from "../../images/sendvich-2.jpg"
import sendvich_3 from "../../images/sendvich-3.jpg"
import sendvich_4 from "../../images/sendvich-4.jpg"
import sendvich_5 from "../../images/sendvich-5.jpg"
import sendvich_6 from "../../images/sendvich-6.jpg"
import sendvich_7 from "../../images/sendvich-7.jpg"
const Sendvich = () => {
  const sendvich1 = {
    img:sendvich_1,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const sendvich2 = {
    img:sendvich_2,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const sendvich3 = {
    img:sendvich_3,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const sendvich4 = {
    img:sendvich_4,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const sendvich5 = {
    img:sendvich_5,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const sendvich6 = {
    img:sendvich_6,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const sendvich7 = {
    img:sendvich_7,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  return (
    <div className='sendvich'>
      <div className='container sendvich-container'>
        <Card data={sendvich1}/>
        <Card data={sendvich2}/>
        <Card data={sendvich3}/>
        <Card data={sendvich4}/>
        <Card data={sendvich5}/>
        <Card data={sendvich6}/>
        <Card data={sendvich7}/>
        <Card data={sendvich1}/>
        <Card data={sendvich4}/>
      </div>
    </div>
  )
}

export default Sendvich
