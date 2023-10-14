import PaymentMethodsOption from "@/components/ui/checkout/PaymentMethodsOption";
import { Poppins, Rajdhani } from "next/font/google";
import React from "react";

type pageProps = {};

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const page: React.FC<pageProps> = () => {
  return (
    <section className={`${rajdhani.className} px-10 py-16 `}>
      <div className="xl:container container mx-auto">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="lg:w-[920px] pt-[14px] bg-[#fff] s-d">
            <div className="px-[35px]">
              <h2 className="text-3xl font-semibold mb-5 text-[#414B56] tracking-[0,6px]">
                Shipping Details
              </h2>
            </div>
            <div className="h-[1px] bg-[#ECECEC]"></div>

            <div className="px-[35px]">
              <div className="mt-[19px]">
                <h3 className="text-tertiary text-xl font-medium uppercase tracking-[0.4px ]">
                  Contact Information
                </h3>
              </div>
              <form className="pt-[19px] pb-[53px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
                  <div className="col-span-2 md:col-span-1">
                    <div className="mb-5">
                      <label
                        htmlFor="firstName"
                        className="text-sm text-[#636363] mb-[10px]"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="rounded-sm border-[1px] border-[#EAEAEA] w-full h-[45px] opacity-50 bg-[#FAFAFA]"
                      />
                    </div>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <div className="mb-5">
                      <label
                        htmlFor="lastName"
                        className="text-sm text-[#636363] mb-[10px]"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="rounded-sm border-[1px] border-[#EAEAEA] w-full h-[45px] opacity-50 bg-[#FAFAFA]"
                      />
                    </div>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <div className="mb-5">
                      <label
                        htmlFor="email"
                        className="text-sm text-[#636363] mb-[10px]"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="rounded-sm border-[1px] border-[#EAEAEA] w-full h-[45px] opacity-50 bg-[#FAFAFA]"
                      />
                    </div>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <div className="mb-5">
                      <label
                        htmlFor="mobile"
                        className="text-sm text-[#636363] mb-[10px]"
                      >
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        required
                        className="rounded-sm border-[1px] border-[#EAEAEA] w-full h-[45px] opacity-50 bg-[#FAFAFA]"
                      />
                    </div>
                  </div>
                  <div className="col-span-2 mb-5">
                    <label
                      htmlFor="addressLine1"
                      className="text-sm text-[#636363] mb-[10px]"
                    >
                      Address Line 1
                    </label>
                    <input
                      type="text"
                      id="addressLine1"
                      name="addressLine1"
                      required
                      className="rounded-sm border-[1px] border-[#EAEAEA] w-full h-[45px] opacity-50 bg-[#FAFAFA]"
                    />
                  </div>
                  <div className="col-span-2 mb-5">
                    <label
                      htmlFor="addressLine2"
                      className="text-sm text-[#636363] mb-[10px]"
                    >
                      Address Line 2
                    </label>
                    <input
                      type="text"
                      id="addressLine2"
                      name="addressLine2"
                      className="rounded-sm border-[1px] border-[#EAEAEA] w-full h-[45px] opacity-50 bg-[#FAFAFA]"
                    />
                  </div>
                  <div className="col-span-2 mb-5">
                    <label
                      htmlFor="country"
                      className="text-sm text-[#636363] mb-[10px]"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      required
                      className="rounded-sm border-[1px] border-[#EAEAEA] w-full h-[45px] opacity-50 bg-[#FAFAFA]"
                    >
                      <option value="us">United States</option>
                      <option value="ca">Canada</option>
                      {/* Add more options here */}
                    </select>
                  </div>
                  <div className="col-span-2 mb-5">
                    <label
                      htmlFor="city"
                      className="text-sm text-[#636363] mb-[10px]"
                    >
                      City/Area
                    </label>
                    <select
                      id="city"
                      name="city"
                      required
                      className="rounded-sm border-[1px] border-[#EAEAEA] w-full h-[45px] opacity-50 bg-[#FAFAFA]"
                    >
                      <option value="nyc">New York City</option>
                      <option value="la">Los Angeles</option>
                      {/* Add more options here */}
                    </select>
                  </div>
                  <div className="col-span-2 mb-5">
                    <label
                      htmlFor="state"
                      className="text-sm text-[#636363] mb-[10px]"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      required
                      className="rounded-sm border-[1px] border-[#EAEAEA] w-full h-[45px] opacity-50 bg-[#FAFAFA]"
                    />
                  </div>
                  <div className="col-span-2 mb-5">
                    <label
                      htmlFor="postalCode"
                      className="text-sm text-[#636363] mb-[10px]"
                    >
                      Postal Code
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      required
                      className="rounded-sm border-[1px] border-[#EAEAEA] w-full h-[45px] opacity-50 bg-[#FAFAFA]"
                    />
                  </div>
                </div>
                <div className="mt-6 flex gap-8 items-center">
                  <input
                    type="checkbox"
                    className="bg-blue-500 text-white w-[27px] h-[27px] rounded"
                  />
                  <p className="text-tertiary text-lg">Add to address book</p>
                </div>
              </form>
            </div>
          </div>
          <div
            className={`${poppins.className} lg:w-[439px] lg:h-[790px] p-5 md:p-[29px] bg-[#fff] s-d`}
          >
            <div>
              <div>
                <h4 className="text-tertiary text-xl font-medium">MY Orders</h4>
                <div className="mt-[25px] flex justify-between gap-[80px] ">
                  <p className="text-[#8D8D8D] text-lg">
                    LED Monitor With High Quality In The World
                  </p>
                  <div className="flex justify-between gap-3 ">
                    <span className="text-[#8D8D8D] text-xl">1x</span>
                    <p className="text-tertiary text-xl font-medium">৳976.33</p>
                  </div>
                </div>
                <div className="mt-[25px] flex justify-between gap-[80px]  mb-[38px]">
                  <p className="text-[#8D8D8D] text-lg">Magic Pen for iPad</p>
                  <div className="flex justify-between gap-3 ">
                    <span className="text-[#8D8D8D] text-xl">1x</span>
                    <p className="text-tertiary text-xl font-medium">৳976.33</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#F3F3F3] mb-[29px] h-[1px]"></div>
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p className="text-tertiary text-xl font-medium">৳1,952.66</p>
              </div>
              <div className="mt-[15px] flex justify-between">
                <p>Free Shipping </p>
                <p className="text-tertiary text-xl font-medium">৳0</p>
              </div>
              <div className="bg-[#F3F3F3] mb-[29px] h-[1px] my-[30px]"></div>
              <div className="flex justify-between">
                <h4 className="text-lg text-tertiary font-medium">
                  Order Total
                </h4>
                <h6 className=" text-[28px] font-semibold text-secondary">
                  ৳1,952.66
                </h6>
              </div>
              <div className="bg-[#F3F3F3] mt-[26px] mb-[29px] h-[1px]"></div>
              <div>
                <h4 className="text-xl text-[#3D3D3F]">Payment Methods</h4>
                <PaymentMethodsOption />
                <button className="text-[#FBFBFB] bg-secondary mt-[30px] text-sm lg:text-xl font-semibold w-full py-[13px] rounded">
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default page;
