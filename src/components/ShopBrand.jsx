import React from 'react'
import Flex from './Flex'
import Image from './Image'

const ShopBrand = ({ShpBrnd , title , subtitle ,btn}) => {
  return (
    <div className='relative rounded-md w-[316px] h-[200px]'>
        <Image className='w-full h-full' src={ShpBrnd}/>

        <Flex className="absolute top-0 right-0 flex-col text-left w-[173px] h-full gap-4 items-center justify-center">
      <h1 className="lg:text-lg text-sm mb-2 w-full font-mont font-semibold">{title}</h1>
      <p className="text-[20px] text-red font-semibold">{subtitle}</p>
      <button className='font-semibold underline hover:text-red uppercase text-base'>{btn}</button>
    </Flex>
    </div>
  )
}

export default ShopBrand