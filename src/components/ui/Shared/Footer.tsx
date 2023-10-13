import { customerLinks, footerItems, qLinks, socialLinks } from "@/constants";
import Image from "next/image";
import React from "react";
import logo from "@/assets/footer/logo.svg";
import Link from "next/link";
import support from "@/assets/footer/support.svg";
import masterCard from "@/assets/footer/masterCard.svg";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-[#FFF]">
      <div className="">
        {/* footer top */}
        <div className="container xl:container mx-auto px-5">
          <div className="px-3 grid grid-cols-1 md:grid-cols-2 xl:flex justify-around gap-[99px] pt-[62px] pb-[49px]">
            {footerItems.map((item) => (
              <div className="flex gap-[18px]" key={item.id}>
                <div>
                  <Image src={item.icon} alt={item.title} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* footer middle */}
        <div className="border-t-[1px] border-b-[1px] border-[#E5E5E5] px-5">
          <div className="container xl:container mx-auto">
            <div className="xl:flex grid grid-cols-1 md:grid-cols-2 gap-10  py-16 justify-between border-t-[1px] border-[#E5E5E5] ">
              <div className="">
                <Image src={logo} alt="logo" className="mb-9" />
                <p className=" text-tertiary w-full xl:w-[390px] text-xs md:text-base">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <div className="mt-[26px]">
                  <ul className="flex gap-4">
                    {socialLinks.map((item) => (
                      <Link href={item.path} key={item.id}>
                        <li>
                          <Image src={item.icon} alt={item.name} />
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
              {/* quick links */}
              <div>
                <h3 className="text-tertiary text-xl font-medium mb-[25px] uppercase ">
                  quick links
                </h3>
                <ul>
                  {qLinks.map((item) => (
                    <Link href={item.path} key={item.id}>
                      <li className="text-lg text-tertiary opacity-80 leading-[44px]">
                        {item.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
              {/* CUSTOMER AREA */}
              <div>
                <h3 className="text-tertiary text-xl font-medium mb-[25px] uppercase ">
                  CUSTOMER AREA
                </h3>
                <ul>
                  {customerLinks.map((item) => (
                    <Link href={item.path} key={item.id}>
                      <li className="text-lg text-tertiary opacity-80 leading-[44px]">
                        {item.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
              {/* CONTACT */}
              <div>
                <h3 className="text-tertiary text-xl font-medium mb-[25px] uppercase ">
                  Contact
                </h3>
                <p className="text-base text-tertiary opacity-80 xl:w-[340px] mt-[25px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
                <div className="flex items-center gap-[27px] mt-[31px]">
                  <Image src={support} alt="support" />
                  <div>
                    <h5 className="text-tertiary text-lg">
                      Have any question?
                    </h5>
                    <h4 className="mt-[6px] text-secondary text-3xl font-semibold">
                      099 456 789
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer bottom */}
        <div className="container xl:container mx-auto px-5">
          <div className="flex xl:flex-row flex-col justify-between items-center">
            <p className="text-tertiary text-base text-center py-5">
              Projectnirvoya - © 2021 All Rights Reserved
            </p>
            <div className="flex flex-col md:flex-row items-center">
              <h3 className="text-lg text-secondary opacity-80 font-medium">
                Pay With
              </h3>
              <Image src={masterCard} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
