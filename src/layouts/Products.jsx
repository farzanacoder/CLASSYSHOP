import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import CartItem from "../components/CartItem";
import List from "../components/List";
import Cartimg from "../assets/phn.png";
import axios from "axios";

const Products = () => {
  let [category , setCategory] = useState([])
 useEffect(()=>{
  async function fetchData() {
    let data = await axios.get('https://serviceapi.spicezgold.com/api/category')
    setCategory(data.data.category)
    
  }

  fetchData()
 } , [])


  return (
    <section className="bg-white">
      <Container>
        <Flex className="justify-between items-center flex-col lg:flex-row py-3 lg:py-8">
          <div>
            <h1 className="text-xl mb-2 w-full font-mont font-semibold">
              Popular Products
            </h1>
            <p className="text-gray-800 text-sm">Do not miss the current offers until the end of March.</p>
          </div>

          <Flex className="gap-9">
            <List className='text-gray-600 text-sm border-b-2 pb-2' text='FASHION'/>
            <List className='text-gray-600 text-sm border-b-2 pb-2' text='ELECTRONICS'/>
            <List className='text-gray-600 text-sm border-b-2 pb-2' text='BAGS'/>
            <List className='text-gray-600 text-sm border-b-2 pb-2' text='FOOTWEAR'/>
            <List className='text-gray-600 text-sm border-b-2 pb-2' text='GROCERIES'/>
            <List className='text-gray-600 text-sm border-b-2 pb-2' text='BEAUTY'/>
            <List className='text-gray-600 text-sm border-b-2 pb-2' text='WELLNESS'/>
          </Flex>
        </Flex>


        <Flex className='gap-2'>
          <CartItem ShpBrnd={Cartimg} title='Apple' subtitle='Apple iPhone 15 (Blue, 12...)' price='$1599.00' />
          <CartItem ShpBrnd={Cartimg} title='Apple' subtitle='Apple iPhone 15 (Blue, 12...)' price='$1599.00' />
          <CartItem ShpBrnd={Cartimg} title='Apple' subtitle='Apple iPhone 15 (Blue, 12...)' price='$1599.00' />
          <CartItem ShpBrnd={Cartimg} title='Apple' subtitle='Apple iPhone 15 (Blue, 12...)' price='$1599.00' />
          <CartItem ShpBrnd={Cartimg} title='Apple' subtitle='Apple iPhone 15 (Blue, 12...)' price='$1599.00' />
          <CartItem ShpBrnd={Cartimg} title='Apple' subtitle='Apple iPhone 15 (Blue, 12...)' price='$1599.00' />
        </Flex>
      </Container>
    </section>
  );
};

export default Products;
