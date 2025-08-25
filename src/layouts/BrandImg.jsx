import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Brndimg from '../assets/bnd1.png'
import Brndimg1 from '../assets/bnd2.png'
import Brndimg2 from '../assets/bnd3.png'
import Brndimg3 from '../assets/bnd4.png'

const BrandImg = () => {
  return (
    <div className='bg-body py-14'>
        <Container>
            <Flex className='justify-between'>
                <div className='h-[200px] w-[316px] group overflow-hidden rounded-md'>
                    <Image className='h-full w-full group-hover:scale-105 group-hover:rotate-1 duration-200 cursor-pointer' src={Brndimg}/>
                </div>
                <div className='h-[200px] w-[316px] group overflow-hidden rounded-md'>
                    <Image className='h-full w-full group-hover:scale-105 group-hover:rotate-1 duration-200 cursor-pointer' src={Brndimg1}/>
                </div>
                <div className='h-[200px] w-[316px] group overflow-hidden rounded-md'>
                    <Image className='h-full w-full group-hover:scale-105 group-hover:rotate-1 duration-200 cursor-pointer' src={Brndimg2}/>
                </div>
                <div className='h-[200px] w-[316px] group overflow-hidden rounded-md'>
                    <Image className='h-full w-full group-hover:scale-105 group-hover:rotate-1 duration-200 cursor-pointer' src={Brndimg3}/>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default BrandImg