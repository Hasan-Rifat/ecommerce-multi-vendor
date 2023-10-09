import Sliders from "@/lib/Slider";
import Image from "next/image";
import React from "react";
import groceries from "@/assets/Groceries collection.svg";
import health from "@/assets/Health & Beauty.svg";

type BannerProps = {};

const Banner: React.FC<BannerProps> = () => {
  return (
    <section className="px-4 my-7">
      <div className="container xl:container mx-auto">
        <div className="flex items-center gap-[30px]">
          <div className="w-full xl:max-w-[925px]  xl:h-[564px]  xl:w-2/3 rounded-2xl overflow-hidden">
            <Sliders />
          </div>
          <div className="hidden xl:block max-w-[449px] w-1/3  rounded-2xl">
            <div className="flex gap-8 flex-col">
              <div className="relative flex items-end w-full h-[268px] ">
                <Image
                  className="absolute w-full left-0 top-0 -z-[1] rounded-2xl"
                  src={groceries}
                  alt="groceries"
                />
                <div className="bg-[#FAFAFA] px-[32px] py-[16px] mb-6 opacity-80 w-[62%] rounded-md mx-auto text-xl font-semibold text-secondary text-center">
                  Groceries collection
                </div>
              </div>
              <div className="relative flex items-end w-full h-[268px] ">
                <Image
                  className="absolute w-full left-0 top-0 -z-[1] rounded-2xl"
                  src={health}
                  alt="groceries"
                />
                <div className="bg-[#FAFAFA] px-[32px] py-[16px] mb-6 opacity-80 w-[77%] rounded-md mx-auto text-xl font-semibold text-secondary text-center">
                  Health & Beauty collection
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
