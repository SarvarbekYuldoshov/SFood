import React from 'react'
import "./Free.css"
import Card from '../../Card/Card'
import Free_1 from "../../images/free-1.jpg"
import Free_2 from "../../images/free-2.jpg"
import Free_3 from "../../images/free-3.jpg"
import Free_4 from "../../images/free-4.jpg"
import Free_5 from "../../images/free-5.jpg"
import Free_6 from "../../images/free-6.jpg"
import Free_7 from "../../images/free-7.jpg"
import Free_8 from "../../images/free-8.jpg"
import Free_9 from "../../images/free-9.jpg"
const Free = () => {
  const free1 = {
    img:Free_1,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const free2 = {
    img:Free_2,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const free3 = {
    img:Free_3,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const free4 = {
    img:Free_4,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const free5 = {
    img:Free_5,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const free6 = {
    img:Free_6,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const free7 = {
    img:Free_7,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const free8 = {
    img:Free_8,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const free9 = {
    img:Free_9,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  return (
    <div className='free'>
      <div className='container free-container'>
         <Card data={free1}/>
         <Card data={free2}/>
         <Card data={free3}/>
         <Card data={free4}/>
         <Card data={free5}/>
         <Card data={free6}/>
         <Card data={free7}/>
         <Card data={free8}/>
         <Card data={free9}/>
      </div>
    </div>
  )
}

export default Free
