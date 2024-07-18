import React from 'react'
import "./Pizza.css"
import Card from '../../Card/Card'
import pizza_1 from "../../images/pizza-1.jpg"
import pizza_2 from "../../images/pizza-2.jpg"
import pizza_3 from "../../images/pizza-3.jpg"
import pizza_4 from "../../images/pizza-4.jpg"
import pizza_5 from "../../images/pizza-5.jpg"
import pizza_6 from "../../images/pizza-6.jpg"
import pizza_7 from "../../images/pizza-7.jpg"
import pizza_8 from "../../images/pizza-8.jpg"
const Pizza = () => {
  const pizza1 = {
    img:pizza_1,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const pizza2 = {
    img:pizza_2,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const pizza3 = {
    img:pizza_3,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const pizza4 = {
    img:pizza_4,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const pizza5 = {
    img:pizza_5,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const pizza6 = {
    img:pizza_6,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const pizza7 = {
    img:pizza_7,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const pizza8 = {
    img:pizza_8,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  return (
    <div className='pizza'>
      <div className='container pizza-container'>
        <Card data={pizza1}/>
        <Card data={pizza2}/>
        <Card data={pizza3}/>
        <Card data={pizza4}/>
        <Card data={pizza5}/>
        <Card data={pizza6}/>
        <Card data={pizza7}/>
        <Card data={pizza8}/>
        <Card data={pizza1}/>
      </div>
    </div>
  )
}

export default Pizza
