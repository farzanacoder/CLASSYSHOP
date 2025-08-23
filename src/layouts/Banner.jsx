import React from "react";
import PrevArr from "../components/PrevArr";
import NextArr from "../components/NextArr";
import Slider from "react-slick";
import Image from "../components/Image";

import banner1 from "../assets/Banner.jpg";
import banner2 from "../assets/Banner_1.jpg";
import banner3 from "../assets/Banner_2.jpg";
import banner4 from "../assets/Banner_3.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArr />,
    prevArrow: <PrevArr />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  let banner = [
    { id: 1, title: "banner 1", img: banner1 },
    { id: 2, title: "banner 2", img: banner2 },
    { id: 3, title: "banner 3", img: banner3 },
    { id: 4, title: "banner 4", img: banner4 },
  ];

  return (
    <Slider {...settings}>
      {banner.map((item) => (
        <div key={item.id} className="bg-amber-100">
          <Image src={item.img} alt={item.title} />
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
