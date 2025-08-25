import React from 'react'
import Flex from '../components/Flex'
import { LiaShippingFastSolid } from 'react-icons/lia'
import Container from '../components/Container'

const Shipping = () => {
  return (
    <div className='py-0 lg:py-10'>
        <Container>
            <Flex className='justify-evenly items-center  md:w-[80%] w-full m-auto rounded-md py-2 border-2 border-red'>
                <Flex className='items-center gap-5'>
            <LiaShippingFastSolid className="text-6xl mb-2 text-gray-800"/> 
           <p className='text-[16px] lg:text-[20px] font-semibold uppercase'> Free Shipping</p>
        </Flex>

              <p className="text-[13px] text-gray-700">Free Delivery Now On Your First Order and over $200</p>
              <p className='text-[20px] lg:text-[25px] font-bold'>- Only $200*</p>
            </Flex>
        </Container>
    </div>
  )
}

export default Shipping