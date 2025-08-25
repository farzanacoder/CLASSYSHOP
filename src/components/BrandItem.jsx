import React from "react";
import Image from "./Image";
import Flex from "./Flex";

const BrandItem = ({img , text}) => {
  return (
    <Flex className="bg-body justify-center gap-2.5 items-center flex-col h-[150px] w-[155px]">
      <div className="w-[60px] h-[60px]">
        <Image className="w-full h-full hover:scale-110 cursor-pointer duration-100" src={img} />
      </div>
      <p className="text-[15px] font-mont">{text}</p>
    </Flex>
  );
};

export default BrandItem;
