"use client";
import Slider from "react-slick";
import sliderImg from "@/assets/slider image.svg";
import Image from "next/image";

type SliderProps = {};

const Sliders: React.FC<SliderProps> = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
    <Slider {...settings} className="w-full h-full bg-[#000] relative">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
        <div key={i} className=" bg-red w-full h-full flex items-center">
          <Image
            className="absolute top-0 left-0 w-full h-full "
            src={sliderImg}
            alt="slider image"
          />
          <div className="px-[60px] py-[160px] ">
            <h2 className="text-[#0970CD] text-[45px] leading-7">
              Explore Men’s <br /> Winter Collection
            </h2>
            <p className="text-[#646464] text-xl leading-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.{" "}
            </p>
            <button className="px-[25px] py-[18px] bg-secondary text-[#fff] rounded-2xl inline-block">
              SHOP NOW
            </button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Sliders;
