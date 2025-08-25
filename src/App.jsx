import React from 'react'
import Banner from './layouts/Banner'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Brand from './layouts/Brand'
import Shipping from './layouts/Shipping'
import Collection from './layouts/Collection'
import BrandImg from './layouts/BrandImg'

const App = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <Brand/>
      <Shipping/>
      <Collection/>
      <BrandImg/>
      <Footer/>
    </>
  )
}

export default App