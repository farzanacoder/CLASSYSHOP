import React from "react";
import Image from "./Image";
import Footimg from "../assets/brand1.png";
import Flex from "./Flex";
import { LiaShippingFastSolid } from "react-icons/lia";

const FooterBrand = ({ icon, title, subtitle }) => {
  return (
    <Flex className="flex-col items-center justify-center text-center">
      <button className="">{icon}</button>
      <h1 className="text-lg mb-2 w-full font-mont font-semibold">{title}</h1>
      <p className="text-[13px] text-gray-700">{subtitle}</p>
    </Flex>
  );
};

export default FooterBrand;
