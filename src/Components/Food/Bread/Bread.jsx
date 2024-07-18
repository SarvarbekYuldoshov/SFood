import React from 'react'
import "./Bread.css"
import Card from '../../Card/Card'
import foto_1 from "../../images/foto-1.jpg"
import foto_2 from "../../images/foto-2.jpg"
import foto_3 from "../../images/foto-3.jpg"
import foto_4 from "../../images/foto-4.jpg"
import foto_5 from "../../images/foto-5.jpg"
import foto_6 from "../../images/foto-6.jpg"
import foto_7 from "../../images/foto-8.jpg"
import foto_8 from "../../images/foto-9.jpg"
const Bread = () => {
  const bread_1 = {
    img:foto_1,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const bread_2 = {
    img:foto_2,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const bread_3 = {
    img:foto_3,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const bread_4 = {
    img:foto_4,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const bread_5 = {
    img:foto_5,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const bread_6 = {
    img:foto_6,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const bread_7 = {
    img:foto_7,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const bread_8 = {
    img:foto_8,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const bread_9 = {
    img:foto_1,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  return (
    <div className='bread'>
      <div className='container bread-container'>
        <Card data={bread_1}/>
        <Card data={bread_2}/>
        <Card data={bread_3}/>
        <Card data={bread_4}/>
        <Card data={bread_5}/>
        <Card data={bread_6}/>
        <Card data={bread_7}/>
        <Card data={bread_8}/>
        <Card data={bread_9}/>
      </div>
    </div>
  )
}

export default Bread
