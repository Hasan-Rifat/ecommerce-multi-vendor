"use client";
import RangeSlider from "@/components/RangeSlider";
import Starts from "@/components/Starts";
import { categoriesItem } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";

type FilterBarProps = {
  minPrice: number;
  maxPrice: number;
};

const FilterBar: React.FC<FilterBarProps> = ({
  minPrice = 1000,
  maxPrice = 2500,
}) => {
  const path = usePathname();

  const [price, setPrice] = useState(Infinity);

  return (
    <div className=" bg-[#fff] py-[25px] ">
      <div className="border-b-[2px] border-[#F4F4F4] px-[19px]">
        <h2 className="text-lg text-[#3D3D3F] font-medium capitalize">
          Related Categories
        </h2>
        <ul className=" flex flex-col pb-[18px]">
          <li
            className={`${
              path === `/category/men's-fashion`
                ? "text-secondary"
                : "text-[#757575] ml-[27px]"
            } font-medium  text-xs xl:text-base
          list-disc	pb-[5px]
            `}
          >
            <Link href={`/category/men's-fashion`}>Men&apos;s Fashion</Link>
          </li>
          {categoriesItem.map((item, index) => (
            <li
              key={index}
              className={`${
                path === `/category/${item.path}`
                  ? "text-secondary"
                  : "text-[#757575] "
              } font-medium  text-xs xl:text-base pb-[5px] pl-[37px]
            ${index == 1 && "hidden"}
            `}
            >
              <Link href={`/category/${item.path}`}>{item.category}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-b-[2px] border-[#F4F4F4] ">
        <div className="px-[19px] py-[22px]">
          <h2 className="text-lg text-[#3D3D3F] font-medium capitalize">
            Filter by Price
          </h2>
          <div className="mt-10 mb-8">
            <RangeSlider min={0} max={100} value={price} onChange={setPrice} />
          </div>
          <h4>
            <span className="text-lg text-[#A7A7A7]">Price: {""}</span>
            <span className="text-[#383838] text-lg font-medium">
              ৳{minPrice} - ৳{maxPrice}
            </span>
          </h4>
        </div>
      </div>
      <div className="">
        <div className="px-[19px] pt-[25px]">
          <h2 className="text-lg text-[#3D3D3F] font-medium capitalize">
            Filter by Rating
          </h2>

          <div className=" my-8">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <input
                  className="border-2 border-[#d0d0d2] w-6 h-6 appearance-none "
                  type="checkbox"
                />
                <Starts data={24} value={1} />
              </div>
              <div className="flex gap-4 items-center">
                <input
                  className="border-2 border-[#d0d0d2] w-6 h-6 appearance-none "
                  type="checkbox"
                />
                <Starts data={24} value={2} />
              </div>
              <div className="flex gap-4 items-center">
                <input
                  className="border-2 border-[#d0d0d2] w-6 h-6 appearance-none "
                  type="checkbox"
                />
                <Starts data={24} value={3} />
              </div>
              <div className="flex gap-4 items-center">
                <input
                  className="border-2 border-[#d0d0d2] w-6 h-6 appearance-none "
                  type="checkbox"
                />
                <Starts data={24} value={4} />
              </div>
              <div className="flex gap-4 items-center">
                <input
                  className="border-2 border-[#d0d0d2] w-6 h-6 appearance-none "
                  type="checkbox"
                />
                <Starts data={24} value={5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FilterBar;
