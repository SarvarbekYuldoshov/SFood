import React from 'react'
import "./Xoddog.css"
import Card from '../../Card/Card'
import xodog1 from "../../images/xoddog-1.jpg"
import xodog2 from "../../images/xoddog-2.jpg"
import xodog3 from "../../images/xoddog-3.jpg"
import xodog4 from "../../images/xoddog-4.jpg"
import xodog5 from "../../images/xoddog-5.jpg"
import xodog6 from "../../images/xoddog-6.jpg"
import xodog7 from "../../images/xoddog-7.jpg"
import xodog8 from "../../images/xoddog-8.jpg"
import xodog9 from "../../images/xoddog-9.jpg"
const Xoddog = () => {
  const xoddog1 = {
    img:xodog1,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const xoddog2 = {
    img:xodog2,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const xoddog3 = {
    img:xodog3,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const xoddog4 = {
    img:xodog4,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const xoddog5 = {
    img:xodog5,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const xoddog6 = {
    img:xodog6,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const xoddog7 = {
    img:xodog7,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const xoddog8 = {
    img:xodog8,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const xoddog9 = {
    img:xodog9,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  return (
    <div className='xoddog'>
      <div className='container xoddog-container'>
        <Card data={xoddog1}/>
        <Card data={xoddog2}/>
        <Card data={xoddog3}/>
        <Card data={xoddog4}/>
        <Card data={xoddog5}/>
        <Card data={xoddog6}/>
        <Card data={xoddog7}/>
        <Card data={xoddog8}/>
        <Card data={xoddog9}/>
      </div>
    </div>
  )
}

export default Xoddog
