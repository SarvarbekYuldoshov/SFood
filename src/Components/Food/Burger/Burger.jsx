import React from 'react'
import "./Burger.css"
const Burger = () => {
  return (
    <div className='burger'>
      <div className='container burger-container'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
      </div>
    </div>
  )
}
import "./Burger.css"
import Card from '../../Card/Card'
export default Burger
