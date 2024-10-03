import { useState } from 'react'
import './index.css'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
          <Header/>
          {/* <Outlet/>
          <Footer/> */}
      </div>
    </>
  )
}

export default App
