"use client";
import Starts from "@/components/Starts";
import React, { useState } from "react";

type FilterRatingProps = {};

const FilterRating: React.FC<FilterRatingProps> = () => {
  return (
    <div className="px-[19px] pt-[25px]">
      <h2 className="text-lg text-[#3D3D3F] font-medium capitalize">
        Filter by Rating
      </h2>

      <div className=" my-8">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <input
              className="border-2 border-[#d0d0d2] w-6 h-6  "
              type="checkbox"
            />
            <Starts data={24} value={1} />
          </div>
          <div className="flex gap-4 items-center">
            <input
              className="border-2 border-[#d0d0d2] w-6 h-6  "
              type="checkbox"
            />
            <Starts data={24} value={2} />
          </div>
          <div className="flex gap-4 items-center">
            <input
              className="border-2 border-[#d0d0d2] w-6 h-6  "
              type="checkbox"
            />
            <Starts data={24} value={3} />
          </div>
          <div className="flex gap-4 items-center">
            <input
              className="border-2 border-[#d0d0d2] w-6 h-6  "
              type="checkbox"
            />
            <Starts data={24} value={4} />
          </div>
          <div className="flex gap-4 items-center">
            <input
              className="border-2 border-[#d0d0d2] w-6 h-6  "
              type="checkbox"
            />
            <Starts data={24} value={5} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FilterRating;
