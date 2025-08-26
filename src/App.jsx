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
import LatestPrdct from './layouts/LatestPrdct'
import FturedPdcts from './layouts/FturedPdcts'
import Bags from './layouts/Bags'
import Jwelery from './layouts/Jwelery'
import Beauty from './layouts/Beauty'
import Wellness from './layouts/Wellness'
import Footwear from './layouts/Footwear'
import Electrnics from './layouts/Electrnics'

const App = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <Brand/>
      <Products/>
      <Shipping/>
      <Collection/>
      <LatestPrdct/>
      <FturedPdcts/>
      <BrandImg/>
      <Bags/>
      <Jwelery/>
      <Beauty/>
      <Wellness/>
      <Footwear/>
      <Electrnics/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default App