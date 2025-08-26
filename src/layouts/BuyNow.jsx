import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import ShopBrand from '../components/ShopBrand'
import SHOP3 from '../assets/shop3.png'
import SHOP4 from '../assets/shop4.png'
import Image from '../components/Image'
import Buyimg from '../assets/bnd1.png'

const BuyNow = () => {
  return (
    <section className='w-full'>
        <Container>
            <Flex className='justify-between flex-col lg:flex-row'>
   <div className='relative overflow-hidden group rounded-md w-[74%]'>
        <Image className='w-full h-full duration-150 transition-transform group-hover:scale-105' src={Buyimg}/>

        <Flex className='absolute top-0 right-0 flex-col text-left w-[50%] h-[100%] gap-1 items-start justify-center'>
      <h1 className="lg:text-lg text-sm mb-2 w-full font-mont font-semibold">Buy women productss with low price</h1>
      <p className="text-[20px] text-red font-semibold">₹999</p>
      <button className='font-semibold underline hover:text-red uppercase text-base cursor-pointer duration-300'>SHOP NOW</button>
    </Flex>
    </div>


                <Flex className='flex-col justify-between'>
                <ShopBrand position='left' ShpBrnd={SHOP3} title='Buy women productss with low price' subtitle='₹999' btn='shop now'/>
                <ShopBrand ShpBrnd={SHOP4} title='Buy women productss with low price' subtitle='₹999' btn='shop now'/>
                </Flex>
            </Flex>
        </Container>
    </section>
  )
}

export default BuyNow