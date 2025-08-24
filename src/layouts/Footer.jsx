import React from "react";
import Flex from "../components/Flex";
import Image from "../components/Image";
import Footimg from "../assets/Container.png";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import Container from "../components/Container";
import List from "../components/List";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <section></section>

      <section className="border-b border-gray">
        <Container>
          <Flex>
            <div className="w-3/12 bg-amber-500">asdnfd</div>

          <div className="w-5/12 flex justify-evenly">
          <Flex className='flex-col gap-2'>
            <h1 className="text-md font-mont font-semibold">Products</h1>
          <List text='Prices drop' className='!font-normal'/>
          <List text='Prices drop' className='!font-normal'/>
          <List text='Prices drop' className='!font-normal'/>
          <List text='Prices drop' className='!font-normal'/>
          <List text='Prices drop' className='!font-normal'/>
          <List text='' className='!font-normal'/>
          </Flex>

          <Flex className='flex-col gap-2'>
            <h1 className="text-md font-mont font-semibold">Our company</h1>
          <List text='Prices drop' className='!font-normal'/>
          <List text='Prices drop' className='!font-normal'/>
          <List text='Prices drop' className='!font-normal'/>
          <List text='Prices drop' className='!font-normal'/>
          <List text='Prices drop' className='!font-normal'/>
          <List text='Prices drop' className='!font-normal'/>
          </Flex>
          </div>

          <div className="w-4/12 bg-amber-500">asdnfd</div>
          </Flex>
        </Container>
      </section>


      <Container className="bg-body py-5">
        <Flex className="justify-between items-center">
          <Flex className='justify-center items-center gap-2'>
            <FaFacebookF />
            <CiYoutube />
            <FaPinterestP />
            <FaInstagram />
          </Flex>
          <p>© 2024 - Ecommerce Template</p>
          <div className="h-[23px] w-[203px]">
            <Image className="h-full w-full" src={Footimg} />
          </div>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
