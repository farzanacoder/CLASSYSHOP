import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import { FiHeart } from 'react-icons/fi'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { IoSearchSharp } from 'react-icons/io5'

const Header = () => {
  return (
    <section className=' border-b border-gray'>
        <div className=' border-b border-gray'>
            <Container>
                <Flex className=' hidden lg:flex justify-between font-mont items-center py-2.5 text-sm font-normal'>
                    <p className='text-black'>Get up to 50% off new season styles, limited time only</p>
                <Flex  className='gap-4'>
                    <a className='hover:text-red duration-500' href="http://" target="_blank" rel="noopener noreferrer">Help Center</a>
                    <a className='hover:text-red duration-500' href="http://" target="_blank" rel="noopener noreferrer">Order Tracking</a>
                </Flex>
            </Flex>
            </Container>
        </div>


           <Container>
             <Flex className='py-4'>
                <div className='lg:w-1/3 w-full'>
                <Image className='!w-[200px]' src={Logo}/>
                </div>

                <div className='lg:w-1/3 relative w-full'>
                <input type="search" name="" id="" placeholder='Search for products...' className='bg-gray-200 py-3 w-[582px] rounded-md pl-6 pr-6 outline-none'/>
                <IoSearchSharp className='absolute -right-32 top-1/2 transform -translate-y-1/2 text-xl'/>
                </div>

                <Flex className='w-1/3 justify-end cursor-pointer items-center gap-3 text-lg'>
                <p  className='hover:text-red duration-500'>Login</p>
                <span>|</span>
                <p  className='hover:text-red duration-500'>Register</p>
                <FiHeart  className='hover:text-red duration-500 text-2xl'/>
                <MdOutlineShoppingCart  className='hover:text-red duration-500 text-2xl'/>
                </Flex>

            </Flex>
           </Container>

    </section>
  )
}

export default Header