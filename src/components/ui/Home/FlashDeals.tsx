import React from "react";
import rightArrow from "@/assets/arrow-right.svg";
import Image from "next/image";
import { products } from "@/constants";
import ProductCart from "@/components/ProductCart";

type FlashDealsProps = {};

const FlashDeals: React.FC<FlashDealsProps> = () => {
  return (
    <section className="px-4">
      <div className="container xl:container mx-auto">
        <div className="">
          <div className="flex justify-between items-center mt-2 md:mt-8 mb-4 md:mb-10">
            <h3 className="text-[#2E2E2E] font-medium text-base md:text-3xl ">
              Flash Deals
            </h3>
            <div className=" hidden md:block">
              <div className="flex items-center gap-[18px]">
                <span className="text-[#757575] font-medium">View more</span>
                <Image
                  src={rightArrow}
                  alt="rightArrow"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-[25px]">
            {products.slice(0, 4).map((product) => (
              <ProductCart product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default FlashDeals;
