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
    <Slider {...settings} className="w-full  h-full">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
        <div
          key={i}
          className="w-full h-full p-5 xl:px-[50px] xl:py-[60px] flex items-center relative"
        >
          <Image className="sliderImg" src={sliderImg} alt="slider image" />
          <div className="h-[250px] xl:h-[450px] flex items-center ">
            <div>
              <h2 className="text-[#0970CD] text-xl xl:text-[45px] xl:leading-[55px] font-bold">
                Explore Men’s <br /> Winter Collection
              </h2>
              <p className="text-[#646464] text-xs xl:text-xl xl:leading-10 xl:mt-[40px] xl:mb-[25px] my-5 w-[184px] xl:w-[418px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <button className="px-[25px] py-[10px] bg-secondary text-[#fff] rounded-[5px] border-none inline-block text-xs">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Sliders;
