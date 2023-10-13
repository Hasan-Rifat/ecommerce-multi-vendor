import FilterBar from "@/components/ui/category/FilterBar";
import { products } from "@/constants";
import chevronDown from "@/assets/chevron-down.svg";
import React from "react";
import Image from "next/image";
import ProductCart from "@/components/ProductCart";

import right from "@/assets/right-p.svg";
import left from "@/assets/left-p.svg";

type pageProps = { params: any };

const page: React.FC<pageProps> = ({ params }) => {
  // filter data by params.category
  const data = products.filter((product) =>
    product.category
      .map((item) => item.toLocaleLowerCase())
      .includes(params.category[1].split("-").join(" "))
  );

  const maxPrice = Math.max(...data.map((item) => item.price));
  const minPrice = Math.min(...data.map((item) => item.price));

  return (
    <div className="py-14 ">
      <div className="xl:container xl:flex-row flex-wrap xl:flex-nowrap container mx-auto flex  px-10 justify-between items-center  gap-4 xl:gap-[75px] ">
        <div className="flex flex-col md:flex-row gap-5 lg:gap-[53px]">
          <div className="xl:w-[300px] w-full lg:w-1/3">
            <FilterBar maxPrice={maxPrice} minPrice={minPrice} />
          </div>
          <div className="xl:w-[1045px]  w-full  lg:w-4/6">
            <div className="flex flex-col justify-center xl:flex-row xl:justify-between gap-3">
              <p className="text-lg text-[#9e9e9e]">
                Showing <span className="text-[#424241] font-medium">20</span>{" "}
                of <span className="text-[#424241] font-medium">160</span>{" "}
                product
              </p>
              <div className="flex gap-3 items-center">
                <p className="text-[#9e9e9e]">Sort by:</p>
                <div className="border-[1.2px] rounded-[3px] border-[#E9E9E9] px-[15px] py-[7px]  flex items-center">
                  <p>Newest Items</p>
                  <Image src={chevronDown} alt="chevron-down" />
                </div>
              </div>
            </div>
            {/* product grid */}
            <div className="mt-[22px] grid-cols-1 grid lg:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-[25px]">
              {data.slice(0, 12).map((product) => (
                <ProductCart key={product.id} product={product} />
              ))}
            </div>
            <div className="flex justify-end items-center mt-10">
              <div className="flex flex-col lg:flex-row gap-[18px]">
                <button className="px-[15px] py-[12px] rounded-[5px] border-[#E9E9E9] bg-[#fff] text-secondary flex gap-[14px] items-center text-lg font-semibold ">
                  <Image src={left} alt="left" />
                  <span>Previous</span>
                </button>
                <div className="!rounded-[5px] border-[#E9E9E9] bg-[#fff] flex items-center justify-center">
                  <button className="rounded-tl-[5px] rounded-bl-[5px]  px-6 py-3 bg-secondary text-[#fff]">
                    1
                  </button>
                  <button className="border-[#E9E9E9] border-r-[1px] px-6 py-3 text-secondary bg-[#fff]">
                    2
                  </button>
                  <button className=" px-6 py-3 text-secondary bg-[#fff]">
                    3
                  </button>
                </div>
                <button className="rounded-tr-[5px] rounded-br-[5px]  px-[15px] py-[12px] rounded-[5px] border-[#E9E9E9] bg-[#fff] text-secondary flex gap-[14px] items-center text-lg font-semibold ">
                  <span> Next</span>
                  <Image src={right} alt="right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;