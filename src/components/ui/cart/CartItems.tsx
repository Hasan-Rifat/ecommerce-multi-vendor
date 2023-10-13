"use client";
import React, { useState } from "react";
import pluse from "@/assets/+.svg";
import minus from "@/assets/-.svg";
import Image from "next/image";

type CartItemsProps = {};

const CartItems: React.FC<CartItemsProps> = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center bg-[#fff] rounded border-[1.5px] border-[#D8D8D8] cart-btn">
      <button
        onClick={() => setCount(count - 1)}
        className="px-[8px] py-[6px] text-[#D2D2D2] text-xl"
      >
        <Image src={minus} alt="minus" />
      </button>
      <span className="px-[11px] py-[6px] text-secondary text-xl">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="px-[8px] py-[6px] text-[#D2D2D2] text-xl"
      >
        <Image src={pluse} alt="pluse" />
      </button>
    </div>
  );
};
export default CartItems;
