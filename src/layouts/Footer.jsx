import React from "react";
import Flex from "../components/Flex";
import Image from "../components/Image";
import Footimg from "../assets/Container.png";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import Container from "../components/Container";
import List from "../components/List";
import { IoChatboxOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <section className="py-10 bg-amber-50">sdh</section>

      <section className="border-y border-gray pt-9 pb-14">
        <Container>
          <Flex>
            <div className="w-3/12">
              <h1 className="text-lg mb-2 w-full font-mont font-semibold">Contact us</h1>
              <div className="text-[13px] font-mont pb-3">
                <p>Classyshop - Mega Super Store</p>
              <p>507-Union Trade Centre France</p>
              </div>
              <a href="" className="pb-2.5 text-[13px] font-mont hover:text-red duration-500">sales@yourcompany.com</a>
              <p className="mt-3 mb-5 text-[22px] font-mont font-semibold text-red">(+91) 9876-543-210</p>

              <Flex className='gap-3'>
                <IoChatboxOutline className="text-[40px] font-bold text-red" />
                <div>
                    <h1 className="text-lg w-full font-mont font-semibold">Online Chat</h1>
                    <h1 className="text-lg w-full font-mont font-semibold">Get Expert Help</h1>
                </div>
              </Flex>
            </div>

          <div className="w-5/12 flex justify-evenly">
          <Flex className='flex-col gap-2'>
            <h1 className="text-lg mb-2 w-full font-mont font-semibold">Products</h1>
          <List text='Prices drop' className='!font-normal'/>
          <List text='New Products' className='!font-normal'/>
          <List text='Best sales' className='!font-normal'/>
          <List text='Contact us' className='!font-normal'/>
          <List text='Sitemap' className='!font-normal'/>
          <List text='Stores' className='!font-normal'/>
          </Flex>

          <Flex className='flex-col gap-2'>
            <h1 className="text-lg mb-2  font-mont font-semibold">Our company</h1>
          <List text='Delivery' className='!font-normal'/>
          <List text='Legal Notice' className='!font-normal'/>
          <List text='Terms and conditions of use' className='!font-normal'/>
          <List text='About us' className='!font-normal'/>
          <List text='Secure payment' className='!font-normal'/>
          <List text='Login' className='!font-normal'/>
          </Flex>
          </div>

          <div className="w-4/12">
                      <h1 className="text-lg mb-2 w-full font-mont font-semibold">Subscribe to newsletter</h1>
                      <p>Subscribe to our latest newsletter to get news about special discounts.</p>
          </div>
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
