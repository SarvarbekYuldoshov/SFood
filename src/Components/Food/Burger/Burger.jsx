import React from 'react'
import "./Burger.css"
import burger_1 from "../../images/burger-1.jpg"
import burger_2 from "../../images/burger-2.jpg"
import burger_3 from "../../images/burger-3.jpg"
import burger_4 from "../../images/burger-4.jpg"
import burger_5 from "../../images/burger-5.jpg"
import burger_6 from "../../images/burger-6.jpg"
import burger_7 from "../../images/burger-7.jpg"
import burger_8 from "../../images/burger-8.jpg"
const Burger = () => {
  const burger1 = {
    img:burger_1,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const burger2 = {
    img:burger_2,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const burger3 = {
    img:burger_3,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const burger4 = {
    img:burger_4,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const burger5 = {
    img:burger_5,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const burger6 = {
    img:burger_6,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const burger7 = {
    img:burger_7,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const burger8 = {
    img:burger_8,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  return (
    <div className='burger'>
      <div className='container burger-container'>
          <Card data={burger1}/>
          <Card data={burger2}/>
          <Card data={burger3}/>
          <Card data={burger4}/>
          <Card data={burger5}/>
          <Card data={burger6}/>
          <Card data={burger7}/>
          <Card data={burger8}/>
          <Card data={burger1}/>
      </div>
    </div>
  )
}
import "./Burger.css"
import Card from '../../Card/Card'
export default Burger
