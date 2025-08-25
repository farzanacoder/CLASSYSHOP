import React from 'react'
import Flex from './Flex'
import Image from './Image'
import { IoStar } from 'react-icons/io5'

const CartItem = ({subtitle , title , price , ShpBrnd , className}) => {
  return (
      <div className='relative overflow-hidden group rounded-md w-[205px] h-[390px] shadow-lg border border-gray-300'>
        <Image className='w-full duration-150 transition-transform rounded-none cursor-pointer group-hover:scale-105' src={ShpBrnd}/>

    <Flex className={`${className} pl-3.5 absolute top-44 h-[200px] flex-col text-left gap-1 items-start justify-center`}>
      <h1 className="text-sm mb-1 text-gray-500">{title}</h1>
      <h1 className="text-sm mb-2 w-full font-mont font-semibold">{subtitle}</h1>
      <Flex className='gap-1 text-yellow-500'>
        <IoStar />
        <IoStar />
        <IoStar />
        <IoStar />
        <IoStar />

      </Flex>
        <Flex className='justify-between pt-1.5 pb-5'>
                  <del className="text-base text-gray-600 font-semibold">{price}</del>
                  <p className="text-base text-red font-semibold">{price}</p>
        </Flex>
      <button className='font-semibold border rounded-md py-2 px-9 text-red hover:text-white hover:bg-black hover:border-none overflow-hidden uppercase text-sm cursor-pointer duration-300'>add to card</button>
    </Flex>
    </div>
  )
}

export default CartItem