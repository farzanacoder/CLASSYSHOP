import React from 'react'
import Banner from './layouts/Banner'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Brand from './layouts/Brand'
import Shipping from './layouts/Shipping'
import Collection from './layouts/Collection'
import BrandImg from './layouts/BrandImg'
import Blog from './layouts/Blog'
import Products from './layouts/Products'

const App = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <Brand/>
      <Products/>
      <Shipping/>
      <Collection/>
      <BrandImg/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default App