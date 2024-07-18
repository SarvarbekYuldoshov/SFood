import React from 'react'
import "./Set.css"
import Card from '../../Card/Card'
import seta_1 from "../../images/set-1.jpg"
import seta_2 from "../../images/set-2.jpg"
import seta_3 from "../../images/set-3.jpg"
import seta_4 from "../../images/set-4.jpg"
import seta_5 from "../../images/set-5.jpg"
import seta_6 from "../../images/set-6.jpg"
import seta_7 from "../../images/set-7.jpg"
import seta_8 from "../../images/set-8.jpg"
import seta_9 from "../../images/set-9.jpg"
const Set = () => {
  const seta1 = {
    img:seta_1,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const seta2 = {
    img:seta_2,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const seta3= {
    img:seta_3,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const seta4 = {
    img:seta_4,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const seta5 = {
    img:seta_5,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const seta6 = {
    img:seta_6,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const seta7 = {
    img:seta_7,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const seta8 = {
    img:seta_8,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const seta9 = {
    img:seta_9,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  return (
    <div className='set'>
      <div className='container set-container'>
        <Card data={seta1}/>
        <Card data={seta2}/>
        <Card data={seta3}/>
        <Card data={seta4}/>
        <Card data={seta5}/>
        <Card data={seta6}/>
        <Card data={seta7}/>
        <Card data={seta8}/>
        <Card data={seta9}/> 
      </div>
    </div>
  )
}

export default Set
