"use client";

import { images } from "@/constants";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

type ImageSliderProps = {};

const ImageSlider: React.FC<ImageSliderProps> = () => {
  const settings = {
    dots: false,
    infinite: true,
    vertical: true, // Enable vertical mode
    verticalSwiping: true, // Allow vertical swipe
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className="w-[104px] h-[104px]">
      <Slider className="mb-[14px]" {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              className="px-1 pt-[7px] bg-[#F2F2F2]"
              height={84}
              width={84}
              src={image}
              alt={`Product ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ImageSlider;
