import React from 'react'
import "./Desert.css"
import Card from '../../Card/Card'
import deser_1 from "../../images/desert-1.jpg"
import deser_2 from "../../images/desert-2.jpg"
import deser_3 from "../../images/desert-3.jpg"
import deser_4 from "../../images/desert-4.jpg"
import deser_5 from "../../images/desert-5.jpg"
import deser_6 from "../../images/desert-6.jpg"
import deser_7 from "../../images/desert-7.jpg"
import deser_8 from "../../images/desert-8.jpg"
import deser_9 from "../../images/desert-9.jpg"
const Desert = () => {
  const desert1 = {
    img:deser_1,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const desert2 = {
    img:deser_2,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const desert3 = {
    img:deser_3,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const desert4 = {
    img:deser_4,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const desert5 = {
    img:deser_5,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const desert6 = {
    img:deser_6,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const desert7 = {
    img:deser_7,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const desert8 = {
    img:deser_8,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  const desert9 = {
    img:deser_9,
    title:"Spicy seasoned seafood noodles",
    text:"Информация: лаваш мясной classic, картофель-фри, пеп",
  }
  return (
    <div className='desert'>
      <div className='container desert-container'>
          <Card data={desert1}/>
          <Card data={desert2}/>
          <Card data={desert3}/>
          <Card data={desert4}/>
          <Card data={desert5}/>
          <Card data={desert6}/>
          <Card data={desert7}/>
          <Card data={desert8}/>
          <Card data={desert9}/>
      </div>
    </div>
  )
}

export default Desert
