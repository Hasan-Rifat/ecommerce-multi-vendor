import Sliders from "@/lib/Slider";
import React from "react";

type BannerProps = {};

const Banner: React.FC<BannerProps> = () => {
  return (
    <section className="px-4 my-7">
      <div className="container xl:container mx-auto">
        <div className="flex items-center gap-[30px]">
          <div className="max-w-[925px] h-[564px] w-2/3 rounded-2xl overflow-hidden">
            <Sliders />
          </div>
          <div className="max-w-[449px] w-1/3">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
