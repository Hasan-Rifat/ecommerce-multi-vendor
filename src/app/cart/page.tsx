"use client";

import { Poppins } from "next/font/google";
import deleteIcon from "@/assets/delete.svg";
import Image from "next/image";
import React, { useState } from "react";
import { cartItems } from "@/constants";
import CartItems from "@/components/ui/cart/CartItems";
import Link from "next/link";

type pageProps = {};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const page: React.FC<pageProps> = () => {
  return (
    <section className={`${poppins.className} px-10 py-12 `}>
      <div className="xl:container container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-[18px]">
          <div className="xl:w-[937px] w-full  lg:w-3/5">
            <div className="bg-[#fff] px-[27px] py-[30px] flex justify-between rounded-[5px]">
              <div className="flex items-center gap-[38px]">
                <input
                  className="border-2 border-[#d0d0d2] md:w-6 md:h-6  "
                  type="checkbox"
                />

                <label className="text-[#3D3D3F] font-medium capitalize md:text-base text-xs">
                  Select All
                </label>
              </div>
              <div className="flex items-center">
                <Image
                  className="mr-[6px] w-[15px]"
                  src={deleteIcon}
                  alt="deleteIcon"
                />
                <p className="uppercase font-medium text-[#A4A4A4] md:text-base text-xs">
                  remove
                </p>
              </div>
            </div>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#fff] px-[27px] my-5 py-[30px] flex justify-between rounded-[5px]"
              >
                <div className="flex w-full justify-between xl:flex-row flex-col md:gap-5 items-center gap-[38px]">
                  <div className="">
                    <div className="flex flex-col md:flex-row justify-between gap-[22px] ">
                      <div className="flex  items-center justify-between gap-5 xl:gap-[38px]">
                        <input
                          className="border-2 border-[#d0d0d2] md:w-6 md:h-6  "
                          type="checkbox"
                        />
                        <Image
                          width={130}
                          height={130}
                          src={item.image}
                          className="rounded-[5px]"
                          alt=""
                        />
                      </div>
                      <div>
                        <h3 className="text-[18px] text-tertiary font-medium">
                          {item.title}
                        </h3>
                        <h5 className="text-xl font-semibold text-secondary mt-4">
                          ৳{item.price}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center xl:flex-col gap-5">
                    <p className="text-[#4D4D4D] text-lg xl:mb-8">
                      SKU: {item.id}
                    </p>
                    <div className="flex items-center gap-5">
                      <div className="">
                        <CartItems />
                      </div>
                      <div className="border-[#e2e2e2]  border-[1px] p-2 rounded-[5px]">
                        <Image
                          className=" "
                          src={deleteIcon}
                          width={20}
                          height={20}
                          alt="deleteIcon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="xl:w-[439px] w-full lg:w-2/5">
            <div className="p-[29px] bg-[#fff] rounded-[5px]">
              <h3 className="text-xl text-tertiary font-medium ">My Orders</h3>
              <div className="flex justify-between mt-[29px]">
                <p className="text-[#8D8D8D] text-lg">Subtotal</p>
                <p className="text-tertiary font-medium text-xl">৳ 1,952.66</p>
              </div>
              <div className="flex justify-between mt-4">
                <p className="text-[#969696] text-xl ">Free Shipping</p>
                <p className="text-tertiary font-medium text-xl">৳0</p>
              </div>
              <div className="h-[1px] bg-[#F3F3F3] mt-[35px] mb-[30px]"></div>
              <div className="flex justify-between items-center">
                <p className="text-sm md:text-lg text-tertiary font-medium ">
                  Order Total
                </p>
                <p className="text-base md:text-[30px] font-semibold text-secondary">
                  ৳1,956.66
                </p>
              </div>
              <Link href={"/checkout"}>
                <button className="px-4 py-2 md:px-[35px]  md:py-[10px] xl:px-[71px]  xl:py-[13px] text-[#FBFBFB] font-semibold text-sm md:text-xl  bg-secondary rounded-[5px] mt-5 md:mt-[56px]">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default page;
