import React from 'react'
import "./Lavash.css"
import Card from '../../Card/Card'
import Rasm1 from "../../images/rasm1.jpg"
import Rasm2 from "../../images/rasm2.jpg"
import Rasm3 from "../../images/rasm3.jpg"
import Rasm4 from "../../images/rasm4.png"
import Rasm5 from "../../images/rasm5.png"
import Rasm6 from "../../images/rasm6.jpg"

const Lavash = () => {
  const Data1 = {
    img:Rasm1,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const Data2 = {
    img:Rasm1,
    title:"x owls available",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const Data3 = {
    img:Rasm1,
    title:"Salted Pasta with mushroom sauce",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const Data4 = {
    img:Rasm1,
    title:"Beef dumpling in hot soup",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const Data5 = {
    img:Rasm2,
    title:"Salted Pasta with mushroom sauce",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const Data6 = {
    img:Rasm3,
    title:"Hot spicy fried rice with omelet",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const Data7 = {
    img:Rasm4,
    title:"Spicy instant noodle with",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const Data8 = {
    img:Rasm5,
    title:"constant noodle special omelette",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const Data9 = {
    img:Rasm6,
    title:"noodle with spinach",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
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

