import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import CartItem from "../components/CartItem";
import List from "../components/List";
import Loading from "../components/Loading";
// import Cartimg from "../assets/phn.png";
import { prdctservices } from "../services/api";

const Products = () => {
const [products , setProducts] = useState([]);
const [loading , setLoading] = useState(true);

useEffect(()=>{
  try {
    (async ()=>{
      const res = await prdctservices.prdct()
      setProducts(res.products);
      
      setLoading(false)
    })();
    
  } catch (error) {
    console.log(error);
    
  }
},[]);


  return (
    <section className="bg-white">
      <Container>
        <Flex className="justify-between items-center flex-col lg:flex-row py-3 lg:py-8">
          <div className="pr-10 md:pr-96">
            <h1 className="md:text-xl text-md mb-2 w-full font-mont font-semibold">
              Popular Products
            </h1>
            <p className="text-gray-800 text-[12px] md:text-sm">Do not miss the current offers until the end of March.</p>
          </div>

          <div className="overflow-x-auto md:overflow-hidden w-full scrlbar pt-5">
            <Flex className="gap-9 min-w-max">
            <List className='text-gray-600 text-sm border-b-2 pb-2' text='FASHION'/>
            <List className='text-gray-600 text-sm border-b-2 pb-2' text='ELECTRONICS'/>
            <List className='text-gray-600 text-sm border-b-2 pb-2' text='BAGS'/>
            <List className='text-gray-600 text-sm border-b-2 pb-2' text='FOOTWEAR'/>
            <List className='text-gray-600 text-sm border-b-2 pb-2' text='GROCERIES'/>
            <List className='text-gray-600 text-sm border-b-2 pb-2' text='BEAUTY'/>
            <List className='text-gray-600 text-sm border-b-2 pb-2' text='WELLNESS'/>
          </Flex>
          </div>
        </Flex>


        <Flex className='flex-wrap gap-2'>
          {
            loading?
            Array.from({length: 6}).map((_ , index) =>(
              <Loading key={index}/>
            ))
            :
            products.map((item)=> <CartItem data={item} key={item._id}/>)
          }
        </Flex>
      </Container>
    </section>
  );
};

export default Products;
