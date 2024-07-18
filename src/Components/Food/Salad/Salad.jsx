import React from 'react'
import "./Salad.css"
import Card from '../../Card/Card'
import salad_1 from "../../images/salad-1.jpg"
import salad_2 from "../../images/salad-2.jpg"
import salad_3 from "../../images/salad-3.jpg"
import salad_4 from "../../images/salad-4.jpg"
import salad_5 from "../../images/salad-5.jpg"
import salad_6 from "../../images/salad-6.jpg"
import salad_7 from "../../images/salad-7.jpg"
import salad_8 from "../../images/salad-8.jpg"
import salad_9 from "../../images/salad-9.jpg"
const Salad = () => {
  const salad1 = {
    img:salad_1,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const salad2 = {
    img:salad_2,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const salad3 = {
    img:salad_3,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const salad4 = {
    img:salad_4,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const salad5 = {
    img:salad_5,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const salad6 = {
    img:salad_6,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const salad7 = {
    img:salad_7,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const salad8 = {
    img:salad_8,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const salad9 = {
    img:salad_9,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  return (
    <div className='salad'>
      <div className='container salad-container'>
        <Card data={salad1}/>
        <Card data={salad2}/>
        <Card data={salad3}/>
        <Card data={salad4}/>
        <Card data={salad5}/>
        <Card data={salad6}/>
        <Card data={salad7}/>
        <Card data={salad8}/>
        <Card data={salad9}/>
      </div>
    </div>
  )
}

export default Salad
