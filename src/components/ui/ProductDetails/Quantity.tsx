"use client";
import React, { useState } from "react";

type QuantityProps = {};

const Quantity: React.FC<QuantityProps> = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="gap-4 flex items-center ">
      <div>Quantity:</div>
      <div className="flex items-center bg-[#EFEFEF] rounded border-[1.5px] border-[#EAEAEA]">
        <button
          onClick={() => setCount(count - 1)}
          className="px-[8px] py-[6px]"
        >
          -
        </button>
        <span className="px-[11px] py-[6px] bg-[#fff]">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="px-[8px] py-[6px]"
        >
          +
        </button>
      </div>
    </div>
  );
};
export default Quantity;
