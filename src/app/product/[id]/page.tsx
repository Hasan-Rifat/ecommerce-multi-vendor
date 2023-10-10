import Starts from "@/components/Starts";
import { products } from "@/constants";
import Image from "next/image";
import check from "@/assets/check.svg";
import checkFill from "@/assets/Check fill.svg";
import heart from "@/assets/Heart.svg";
import React from "react";

import ImageSlider from "@/lib/ImageSlider";

type pageProps = { params: { id: string } };

const page: React.FC<pageProps> = ({ params }) => {
  const { id } = params;

  const data = products.find((item) => item.id === id);

  return (
    <section className="px-5 py-20">
      <div className="container xl:container mx-auto">
        <div className="flex gap-[109px]">
          {/* left site */}
          <div className=" w-full lg:w-[678px] flex gap-[30px]">
            <div className="overflow-hidden">
              <Image
                width={519}
                height={519}
                src={data?.image}
                alt="product image"
                className=""
              />
            </div>
            <div>
              <ImageSlider />
            </div>
          </div>

          {/* right site */}
          <div className="w-full lg:w-[611px]">
            {data && (
              <div>
                <h2>{data?.title}</h2>
                <div>
                  <Starts value={data.rating} />
                  <div>
                    <div>
                      <Image src={check} alt="check icon" />
                    </div>
                    <div>
                      <span>4,320</span>
                    </div>
                    <button>
                      <Image src={heart} alt="add wishlist" />
                      <span>Add to wishlist</span>
                    </button>
                  </div>
                </div>
                <div>
                  <h4>${data.price}</h4>
                  <span>
                    ${((data.price * 20) / 100 + data.price).toFixed(2)}
                  </span>

                  <div className="uppercase md:text-sm font-semibold  bg-gradient-to-r from-[#FF7A00] via-transparent to-[#FFB800] text-shadow-md text-[#fff] px-[5px] md:w-[91px] md:h-[30px] w-[50px] h-[16px] flex items-center justify-center text-[8px]">
                    20%
                  </div>
                </div>
                <div>
                  <p>
                    <span>SKU:</span>
                    <span>{data.id}</span>
                  </p>
                  <div>
                    <Image src={checkFill} alt="check icon" />
                    <span>in Stock</span>
                  </div>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </p>
                  <ul className="list-disc">
                    <li>Direct Full Array </li>
                    <li>Quantum Dot Technology</li>
                    <li>Ambient Mode</li>
                    <li>One Remote Control</li>
                  </ul>
                  <div className="flex items-center mb-8">
                    <h2 className="w-16 text-xl font-bold dark:text-gray-400">
                      Size:
                    </h2>
                    <div className="flex flex-wrap gap-[15px]">
                      <button
                        className="
                      bg-[#fff] border-[1px] border-[#EAEAEA] rounded-[1px] text-[#6E6E6F] py-1 px-[13px] uppercase"
                      >
                        s
                      </button>
                      <button
                        className="
                      text-[#fff] border-[1px] border-[#EAEAEA] rounded-[1px] bg-secondary py-1 px-[13px] uppercase"
                      >
                        m
                      </button>
                      <button
                        className="
                      bg-[#fff] border-[1px] border-[#EAEAEA] rounded-[1px] text-[#6E6E6F] py-1 px-[13px] uppercase"
                      >
                        l
                      </button>
                      <button
                        className="
                      bg-[#fff] border-[1px] border-[#EAEAEA] rounded-[1px] text-[#6E6E6F] py-1 px-[13px] uppercase"
                      >
                        X
                      </button>
                      <button
                        className="
                      bg-[#fff] border-[1px] border-[#EAEAEA] rounded-[1px] text-[#6E6E6F] py-1 px-[13px] uppercase"
                      >
                        Xl
                      </button>
                      <button
                        className="
                      bg-[#fff] border-[1px] border-[#EAEAEA] rounded-[1px] text-[#6E6E6F] py-1 px-[13px] uppercase"
                      >
                        Xxl
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div>Quantity:</div>
                  <div className="flex items-center">
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                  </div>
                  <button className="px-11 py-[11px] text-xl font-medium bg-secondary rounded-[3px] text-[#fff]">
                    Add cart
                  </button>
                  <button className="px-[42px] py-[11px] text-xl font-medium border-[1.5px] bg-[#EBF4F9] text-secondary border-secondary rounded-[3px]">
                    Buy Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default page;
