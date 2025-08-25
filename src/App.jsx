import React from 'react'
import Banner from './layouts/Banner'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Brand from './layouts/Brand'
import Shipping from './layouts/Shipping'

const App = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <Brand/>
      <Shipping/>
      <Footer/>
    </>
  )
}

export default App