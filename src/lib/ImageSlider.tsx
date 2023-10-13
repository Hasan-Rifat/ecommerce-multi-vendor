"use client";

import { images } from "@/constants";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import arrowTop from "@/assets/arrow top.svg";
import arrowBottom from "@/assets/arrow buttom.svg";

type ImageSliderProps = {};

const ImageSlider: React.FC<ImageSliderProps> = () => {
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <Image src={arrowTop} alt="arrowTop" />
      </div>
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <Image src={arrowBottom} alt="arrow Bottom" />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    vertical: true, // Enable vertical mode
    verticalSwiping: true, // Allow vertical swipe
    slidesToShow: 4,
    slidesToScroll: 1,
    // arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 771,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
