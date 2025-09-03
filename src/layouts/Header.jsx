import React, { useState } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import cartimg from "../assets/empty-cart.png";
import Logo from "../assets/logo.png";
import { FiHeart } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMenu, IoSearchSharp } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { GoRocket } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import List from "../components/List";
import { RxCross2 } from "react-icons/rx";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  let [shoping, setShoping] = useState(false);
  let [menuclick, setMenuClick] = useState(false);

  return (
    <header className="font-mont sticky top-0 z-50 bg-white shadow-md">
      <div className=" border-b border-gray">
        <Container>
          <Flex className=" hidden lg:flex justify-between items-center h-12 text-sm font-normal">
            <p className="text-black">
              Get up to 50% off new season styles, limited time only
            </p>
            <Flex className="gap-4">
              <a
                className="hover:text-red duration-500"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                Help Center
              </a>
              <a
                className="hover:text-red duration-500"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Tracking
              </a>
            </Flex>
          </Flex>
        </Container>
      </div>



     <div className="">
       <div className="border-b border-gray">
        <Container>
          <Flex className="py-4 gap-16 md:gap-0 items-center justify-between">
            <div className="">
              <IoMenu
                onClick={() => setMenuClick(true)}
                className="text-xl md:hidden cursor-pointer"
              />
              <AnimatePresence>
                {menuclick && (
                  <>
                  <motion.div onClick={()=> setMenuClick(false)} initial={{opacity: 0}} animate={{opacity: 0.45}} exit={{opacity: 0}} transition={{duration: 0.3}} className="fixed inset-0 bg-black/40 z-40"/>

                    <motion.div initial={{x: '-100%'}} animate={{x: 0}} exit={{x: '-100%'}} transition={{duration:0.4}} className="z-50 fixed left-0 top-0 h-full bg-white px-4 py-4 w-[250px]">
                   <Image className="!w-[170px]" src={Logo} />
                      <Flex className='pt-6 justify-between'>
                        <p className="text-base font-semibold">Shop By Categories </p>
                        <button onClick={() => setMenuClick(false)}>
                            <RxCross2 className="text-xl cursor-pointer" />
                          </button>
                      </Flex>

                      <Flex className="flex-col gap-4 py-6 items-start">
                      <List text="Fashion" />
                      <List text="Electronics" />
                      <List text="Bags" />
                      <List text="Footwear" />
                      <List text="Groceries" />
                      <List text="Beauty" />
                      <List text="Wellness" />
                      <List text="Jewellery" />
                    </Flex>
                          <button className='font-semibold rounded-md w-[220px] py-3 bg-red text-white hover:text-white hover:bg-black hover:border-black text-sm cursor-pointer duration-300'>Login</button>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>



            <div className="lg:w-1/3 w-full">
              <Image className="md:!w-[200px] !w-[140px]" src={Logo} />
            </div>
            <div className="lg:w-1/3 md:block hidden relative w-full">
              <input
                type="search"
                name=""
                id=""
                placeholder="Search for products..."
                className="bg-gray-200 py-3 w-[582px] rounded-md pl-6 pr-6 outline-none"
              />
              <IoSearchSharp className="absolute -right-32 top-1/2 transform -translate-y-1/2 text-xl" />
            </div>
            <Flex className="w-1/3 justify-end cursor-pointer items-center gap-3 text-lg">
              <Flex className="justify-between gap-3 hidden md:flex items-center">
                <p className="hover:text-red duration-500">Login</p>
                <span>|</span>
                <p className="hover:text-red duration-500">Register</p>
                <FiHeart className="hover:text-red duration-500 text-2xl" />
              </Flex>


              <div className="">
                <MdOutlineShoppingCart
                  onClick={() => setShoping(true)}
                  className="hover:text-red-500 duration-300 text-2xl md:text-3xl cursor-pointer"
                />

                <AnimatePresence>
                  {shoping && (
                    <>
                      <motion.div
                        onClick={() => setShoping(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.45 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black z-40"
                      />

                      <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.4 }}
                        className="fixed right-0 top-0 md:w-[390px] w-[300px] h-full bg-white z-50"
                      >
                        <div className="flex justify-between items-center p-4 border-b border-gray-300">
                          <h1 className="font-semibold">Shopping Cart (0)</h1>
                          <button onClick={() => setShoping(false)}>
                            <RxCross2 className="text-xl cursor-pointer" />
                          </button>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-3 mt-28">
                          <Image className='!w-[150px]' src={cartimg}/>
                          <p className="text-gray-600 text-base font-semibold">
                            Your Cart is currently empty
                          </p>
                          <button className="md:px-10 md:py-2 px-2.5 py-1.5 text-[12px] uppercase md:text-md rounded bg-red-500 text-white hover:bg-red-600 duration-700">
                            Continue Shopping
                          </button>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>


            </Flex>
          </Flex>
        </Container>
      </div>


      <nav className="py-2 hidden md:block">
        <Container>
          <Flex className="items-center py-2.5">
            <Flex className="w-1/6 items-center justify-between">
              <RiMenu2Fill className="text-xl" />
              <p className="font-semibold text-sm uppercase">
                Shop By Categories
              </p>
              <IoIosArrowDown />
            </Flex>

            <Flex className="w-4/6 justify-evenly">
              <List text="Home" />
              <List text="Fashion" />
              <List text="Electronics" />
              <List text="Bags" />
              <List text="Footwear" />
              <List text="Groceries" />
              <List text="Beauty" />
              <List text="Wellness" />
              <List text="Jewellery" />
            </Flex>

            <Flex className="w-1/6 items-center gap-3">
              <GoRocket />
              <p className=" text-sm">Free International Delivery</p>
            </Flex>
          </Flex>
        </Container>
      </nav>
     </div>
    </header>
  );
};

export default Header;
