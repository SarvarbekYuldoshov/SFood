import React from 'react'
import "./Xagi.css"
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
const Xagi = () => {
  const xaggi1 = {
    img:xagi1,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const xaggi2 = {
    img:xagi2,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const xaggi3 = {
    img:xagi3,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const xaggi4 = {
    img:xagi4,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const xaggi5 = {
    img:xagi5,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const xaggi6 = {
    img:xagi6,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const xaggi7 = {
    img:xagi7,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const xaggi8 = {
    img:xagi8,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const xaggi9 = {
    img:xagi9,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  return (
    <div className='xagi'>
      <div className='container xagi-container'>
        <Card data={xaggi1}/>
        <Card data={xaggi2}/>
        <Card data={xaggi3}/>
        <Card data={xaggi4}/>
        <Card data={xaggi5}/>
        <Card data={xaggi6}/>
        <Card data={xaggi7}/>
        <Card data={xaggi8}/>
        <Card data={xaggi9}/>
      </div>
    </div>
  )
}

export default Xagi

