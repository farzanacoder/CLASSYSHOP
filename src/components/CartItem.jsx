import React from 'react'
import Flex from './Flex'
import Image from './Image'

const CartItem = ({title , subtitle , btn , ShpBrnd}) => {
  return (
      <div className='relative overflow-hidden group rounded-md w-[205px] h-[200px]'>
        <Image className='w-full h-full duration-150 transition-transform cursor-pointer group-hover:scale-105' src={ShpBrnd}/>

        <Flex className={`absolute top-0 flex-col text-left w-[50%] h-[100%] gap-1 items-start justify-center`}>
      <h1 className="lg:text-lg text-sm mb-2 w-full font-mont font-semibold">{title}</h1>
      <p className="text-[20px] text-red font-semibold">{subtitle}</p>
      <button className='font-semibold underline hover:text-red uppercase text-base cursor-pointer duration-300'>{btn}</button>
    </Flex>
    </div>
  )
}

export default CartItem