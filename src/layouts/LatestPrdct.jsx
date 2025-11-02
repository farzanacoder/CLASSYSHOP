import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import CartItem from "../components/CartItem";
import { FaLongArrowAltRight } from "react-icons/fa";
import { prdctservices } from "../services/api";
import Loading from "../components/Loading";

const LatestPrdct = () => {
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
            <h1 className="text-xl mb-2 w-full font-mont font-semibold">
              Latest Products
            </h1>
          <Flex className='items-center justify-evenly bg-gray-200 hover:bg-gray-300 cursor-pointer duration-300 w-[120px] rounded-sm py-2'>
            <a href="http://" className="text-sm text-black capitalize">view all</a>
            <FaLongArrowAltRight />
          </Flex>

         
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

export default LatestPrdct;
