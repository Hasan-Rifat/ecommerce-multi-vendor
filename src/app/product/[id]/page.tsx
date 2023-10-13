import React from "react";
import Starts from "@/components/Starts";
import { icons, products, reviewsData } from "@/constants";
import Image from "next/image";
import check from "@/assets/check.svg";
import checkFill from "@/assets/Check fill.svg";
import heart from "@/assets/Heart.svg";
import linkedin from "@/assets/linkedin.svg";
import twitter from "@/assets/twitter.svg";
import facebook from "@/assets/facebook.svg";
import whatsup from "@/assets/whatsup.svg";
import link from "@/assets/link.svg";
import detailsHeart from "@/assets/detailsHeart.svg";

import ImageSlider from "@/lib/ImageSlider";
import Link from "next/link";
import Quantity from "@/components/ui/ProductDetails/Quantity";
import AddReviewForm from "@/components/AddReviewForm";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

type pageProps = { params: { id: string } };

const page: React.FC<pageProps> = ({ params }) => {
  const { id } = params;

  const data = products.find((item) => item.id === id);

  return (
    <section
      className={`px-5 py-5 md:py-20 my-10 xl:py-10 xl:my-0 ${poppins.className}`}
    >
      <div className="container xl:container mx-auto">
        <div>
          <div className="flex flex-col gap-5 lg:flex-row xl:gap-[109px]">
            {/* left site */}
            <div className=" w-full xl:w-[678px] ">
              <div className="flex w-full gap-4 xl:gap-[30px] justify-center xl:justify-normal">
                <div className="overflow-hidden ">
                  <Image
                    width={519}
                    height={519}
                    src={data?.image}
                    alt="product image"
                    className=""
                  />
                </div>
                <div className="mt-14">
                  <ImageSlider />
                </div>
              </div>
              <div className="flex gap-[12px] items-center mt-[45px]">
                <span className="text-xl text-tertiary">Share</span>
                <div className="flex gap-[14px]">
                  {icons.map((item) => (
                    <Link className="" href={item.path} key={item.id}>
                      <Image src={item.image} alt="icon" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* right site */}
            <div className="w-full xl:w-[611px]">
              {data && (
                <div className="flex items-center justify-center xl:justify-normal">
                  <div className="w-full">
                    <h2 className="text-[26px] font-medium text-tertiary">
                      {data?.title}
                    </h2>
                    <div className="flex gap-9 mt-[23px] mb-[35px] flex-col lg:flex-row ">
                      <div className="flex gap-1 items-center">
                        <span className="text-lg text-tertiary font-medium">
                          4.0
                        </span>
                        <Starts value={data.rating} />
                        <span className="text-[#BABABA] text-lg">(223)</span>
                      </div>
                      <div className="gap-[10px] flex items-center">
                        <div>
                          <Image src={check} alt="check icon" />
                        </div>
                        <div>
                          <span className="text-lg font-semibold text-tertiary">
                            4,320
                          </span>
                          <span className="text-lg text-tertiary">Sold</span>
                        </div>
                      </div>
                      <button className="flex gap-[15px] items-center ">
                        <Image
                          src={detailsHeart}
                          width={22}
                          height={19}
                          alt="add wishlist"
                        />
                        <span className="text-secondary text-lg font-semibold">
                          Add to wishlist
                        </span>
                      </button>
                    </div>
                    <div className="flex items-center">
                      <h4 className="mr-[25px] text-secondary text-4xl font-semibold">
                        ${data.price}
                      </h4>
                      <span className="text-[#8D8D8D] text-xl line-through mr-[17px]">
                        ${((data.price * 20) / 100 + data.price).toFixed(2)}
                      </span>

                      <div className="uppercase md:text-sm font-semibold  bg-gradient-to-r from-[#FF7A00] via-transparent to-[#FFB800] text-shadow-md text-[#fff] py-[5px] px-[10px] flex items-center justify-center text-[8px] rounded-sm">
                        20%
                      </div>
                    </div>
                    <div className="flex gap-5 mt-[11px]">
                      <p>
                        <span className="text-[#3D3D3F] text-base font-medium mr-1">
                          SKU:
                        </span>
                        <span className="text-[#757575] text-base">
                          {data.id}
                        </span>
                      </p>
                      <div className="flex items-center gap-1">
                        <Image src={checkFill} alt="check icon" />
                        <span>in Stock</span>
                      </div>
                    </div>
                    <div className="w-full h-[1px] bg-[#EAEAEA] mt-[18px] mb-[14px]"></div>
                    <div>
                      <p className="text-tertiary text-lg ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam
                      </p>
                      <ul className="list-disc mt-2 text-tertiary text-lg mb-[32px] pl-5">
                        <li>Direct Full Array </li>
                        <li>Quantum Dot Technology</li>
                        <li>Ambient Mode</li>
                        <li>One Remote Control</li>
                      </ul>
                      <div className="flex items-center mb-8 flex-col md:flex-row gap-2 md:gap-0">
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
                    <div className="flex lg:flex-row flex-col gap-[35px] items-center">
                      <Quantity />
                      <button className="px-11 py-[11px] text-xl font-medium bg-secondary rounded-[3px] text-[#fff]">
                        Add cart
                      </button>
                      <button className="px-[42px] py-[11px] text-xl font-medium border-[1.5px] bg-[#EBF4F9] text-secondary border-secondary rounded-[3px]">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* product details bottom */}
        <div className="py-10 md:py-[84px] ">
          <div>
            <h3 className="border-[1px] border-[#F1F1F1] py-5 px-12 bg-[#F1F1F1] text-2xl font-medium text-secondary">
              Producr details of LED Monitor With High Quality In The World
            </h3>
          </div>
          <div className="py-3 px-5 lg:py-[25px] lg:px-12 bg-[#fff]">
            <h4 className="text-2xl text-tertiary font-semibold mb-5">
              See the best picture no matter where you sit
            </h4>
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-[60px] justify-between">
              <div>
                <ul className="list-disc mt-2 text-tertiary text-lg mb-[32px] pl-5">
                  <li>Size : M, L, XL</li>
                  <li>Product Type : Jogger</li>
                  <li>Main Material : Cotton</li>
                  <li>Gender : Male</li>
                  <li>Waist : Mid-rise</li>
                  <li>Zip : Fly</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc mt-2 text-tertiary text-lg mb-[32px] pl-5">
                  <li>Zipper : Yes</li>
                  <li>Pocket : Two front and One Back Pockets.</li>
                  <li>100% Authentic Product</li>
                  <li>
                    Product color may slightly vary due to our photography and
                    Sometimes it’s vary on
                  </li>
                  <li>our devices</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-[2px] bg-[#F1F1F1] opacity-70"></div>
          <div className="py-3 px-5 lg:py-[25px] lg:px-12 bg-[#fff]">
            <h4 className="text-2xl text-tertiary font-semibold mb-[18px]">
              See the best picture no matter where you sit
            </h4>
            <div className="">
              <p className="pb-[18px] text-lg text-tertiary">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
              </p>
              <p className=" text-lg text-tertiary">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita{" "}
              </p>
            </div>
          </div>
          {/* Customer rating */}
          <div>
            <div className="py-3 px-5 lg:py-[25px] lg:px-12 bg-[#fff] mt-[30px]">
              <div className="flex md:flex-row flex-col items-center gap-[75px]">
                <div className="max-w-[187px]">
                  <h4 className="text-xl text-tertiary font-semibold mb-[15px]">
                    Customer reviews
                  </h4>
                  <div>
                    {data && <Starts value={data?.rating} />}
                    <span className="text-[15px] text-[#3D3D3F]">
                      {data?.rating} out of 5
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-[519px]">
                  <div className="flex items-center mt-4 w-full">
                    <span className="text-sm  text-[#3D3D3F]  ">5 star</span>
                    <div className="w-2/4 h-[8px] mx-4 bg-[#dbdedf] rounded-full ">
                      <div
                        className="h-[8px] bg-[#FFB340] rounded-full"
                        style={{ width: "70%" }}
                      />
                    </div>
                    <span className="text-sm  text-[#3D3D3F] ">70%</span>
                  </div>
                  <div className="flex items-center mt-4">
                    <span className="text-sm text-[#3D3D3F]  ">4 star</span>
                    <div className="w-2/4 h-[8px] mx-4 bg-[#dbdedf] rounded-full ">
                      <div
                        className="h-[8px] bg-[#FFB340] rounded-full"
                        style={{ width: "17%" }}
                      />
                    </div>
                    <span className="text-sm  text-[#3D3D3F] ">17%</span>
                  </div>
                  <div className="flex items-center mt-4">
                    <span className="text-sm text-[#3D3D3F]  ">3 star</span>
                    <div className="w-2/4 h-[8px] mx-4 bg-[#dbdedf] rounded-full ">
                      <div
                        className="h-[8px] bg-[#FFB340] rounded-full"
                        style={{ width: "8%" }}
                      />
                    </div>
                    <span className="text-sm  text-[#3D3D3F] ">8%</span>
                  </div>
                  <div className="flex items-center mt-4">
                    <span className="text-sm  text-[#3D3D3F]  ">2 star</span>
                    <div className="w-2/4 h-[8px] mx-4 bg-[#dbdedf] rounded-full ">
                      <div
                        className="h-[8px] bg-[#FFB340] rounded-full"
                        style={{ width: "4%" }}
                      />
                    </div>
                    <span className="text-sm  text-[#3D3D3F] ">4%</span>
                  </div>
                  <div className="flex items-center mt-4">
                    <span className="text-sm text-[#3D3D3F]  ">1 star</span>
                    <div className="w-2/4 h-[8px] mx-4 bg-[#dbdedf] rounded-full ">
                      <div
                        className="h-[8px] bg-[#FFB340] rounded-full"
                        style={{ width: "60%" }}
                      />
                    </div>
                    <span className="text-sm  text-[#3D3D3F] ">1%</span>
                  </div>
                </div>
                <button className="max-w-[200px] text-sm font-medium text-[#fff] px-12 py-[10px] opacity-90 shadow-md rounded-[3px] bg-secondary">
                  Write a Review
                </button>
              </div>
              <div className=" mt-[20px]">
                <h4 className="text-2xl font-medium text-tertiary tracking-[0.12px]">
                  Reviews ({reviewsData.length})
                </h4>
              </div>
            </div>
            <div className="h-[2px] bg-[#F1F1F1] opacity-70"></div>
          </div>
          {/* Customer review */}
          <div className="flex flex-col gap-[30px] md:py-5 p-5 md:px-12 bg-[#fff]">
            {reviewsData.map((item) => (
              <div key={item.id}>
                <div className="flex gap-4 items-center">
                  <Image src={item.image} alt="user pic" />
                  <div className="flex flex-col md:flex-row">
                    <h4 className="text-lg font-medium text-[#383838] text-center md:text-left">
                      {item.name}
                    </h4>
                    <div className="flex flex-col md:flex-row items-center">
                      <span className="text-[#636363] text-lg font-medium ">
                        {item.rating}
                      </span>
                      <div className="mx-4">
                        <Starts value={+item.rating} />
                      </div>
                      <span className=" text-lg text-[#A7A7A7]">
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mt-6">{item.review}</p>
              </div>
            ))}
          </div>
          {/* add review form */}
          <div className="md:px-12 md:pt-[70px] p-5 bg-[#fff]">
            <div>
              <h4 className="text-2xl font-semibold text-[#383838] ">
                Add a review
              </h4>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div className="pt-[28px]">
              <AddReviewForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default page;
