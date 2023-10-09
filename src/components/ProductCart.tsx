import React from "react";
import Starts from "./Starts";
import { Product } from "@/types";
import Image from "next/image";

import order from "@/assets/order.svg";
import heart from "@/assets/redheart.svg";
import blankHeart from "@/assets/blankheart.svg";
import Link from "next/link";

type ProductCartProps = {
  product: Product;
};

const ProductCart: React.FC<ProductCartProps> = ({ product }) => {
  return (
    <div className=" xl:w-[332px]  md:h-[469] rounded-lg  p-[9px] border-[1px] border-[#E9E9E9] flex flex-col justify-between bg-[#fff]">
      <div className="relative h-[167px] md:h-[313px] bg-[#f2f2f2] rounded-lg">
        <div className="flex absolute left-0 top-0 w-full justify-between">
          <div className="uppercase md:text-sm font-semibold rounded-tl-[9px] rounded-tr-[2px] rounded-br-[2px] rounded-bl-[2px] bg-gradient-to-r from-[#FF7A00] via-transparent to-[#FFB800] text-shadow-md text-[#fff] px-[5px] md:w-[91px] md:h-[30px] w-[50px] h-[16px] flex items-center justify-center text-[8px]">
            <span>{product.offer}</span>
          </div>
          {product.id == 102 || product.id == 106 ? (
            <Image
              src={heart}
              alt="blankHeart"
              width={23}
              height={19}
              className="mt-5 mr-4"
            />
          ) : (
            <Image
              src={blankHeart}
              alt="blankHeart"
              width={23}
              height={19}
              className="mt-5 mr-4"
            />
          )}
        </div>
        <Image src={product.image} alt="product" />
      </div>
      <div>
        <div className="flex items-center gap-[3px] pt-[17px] pb-[12px]">
          <Starts start={product.rating} />
          <span className="text-tertiary text-xs">({product.rating})</span>
        </div>
        <h3 className="text-sm md:text-lg text-[#383838]">{product.title}</h3>
      </div>
      <div className="flex justify-between items-center pt-[10px]">
        <h4 className="text-base md:text-[22px] font-medium text-primary">
          <span>৳</span>
          <span>{product.price}</span>
        </h4>
        <Link href={`/product/${product.id}`}>
          <Image src={order} alt="order" />
        </Link>
      </div>
    </div>
  );
};
export default ProductCart;
