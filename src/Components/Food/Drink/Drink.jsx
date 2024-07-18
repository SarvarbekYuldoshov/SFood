import React from 'react'
import "./Drink.css"
import Card from '../../Card/Card'
import drink_1 from "../../images/drink-1.jpg"
import drink_2 from "../../images/drink-2.jpg"
import drink_3 from "../../images/drink-3.jpg"
import drink_4 from "../../images/drink-4.jpg"
import drink_5 from "../../images/drink-5.jpg"
import drink_6 from "../../images/drink-6.jpg"
import drink_7 from "../../images/drink-7.jpg"
import drink_8 from "../../images/drink-8.jpg"
const Drink = () => {
  const drin1 = {
    img:drink_1,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const drin2 = {
    img:drink_2,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const drin3 = {
    img:drink_3,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const drin4 = {
    img:drink_4,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const drin5 = {
    img:drink_5,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const drin6 = {
    img:drink_6,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const drin7 = {
    img:drink_7,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const drin8 = {
    img:drink_8,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  return (
    <div className='drink'>
      <div className='container drink-container'>
         <Card data={drin1}/>
         <Card data={drin2}/>
         <Card data={drin3}/>
         <Card data={drin4}/>
         <Card data={drin5}/>
         <Card data={drin6}/>
         <Card data={drin7}/>
         <Card data={drin8}/>
         <Card data={drin1}/>
      </div>
    </div>
  )
}

export default Drink
