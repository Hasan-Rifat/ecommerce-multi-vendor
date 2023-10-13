"use client";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import loginIcon from "@/assets/login-icon.svg";
import cart from "@/assets/cart.svg";
import search from "@/assets/search icon.svg";
import heart from "@/assets/Heart.svg";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Slider from "react-slick";

import arrowTop from "@/assets/arrow top.svg";
import arrowBottom from "@/assets/arrow buttom.svg";

import arrowRight from "@/assets/Arrow - Right 2.svg";

type HeaderProps = {};

interface Category {
  category: string;
  path: string;
  subcategories?: Subcategory[];
}

interface Subcategory {
  [key: string]: string;
}
const categories: Category[] = [
  {
    category: "Women's Fashion",
    path: "womens-fashion",
    subcategories: [
      {
        saree: "Saree",
        cotton: "Cotton",
        silk: "Silk",
        katan: "Katan",
        muslin: "Muslin",
        jamdani: "Jamdani",
        georgette: "Georgette",
        "nakshi-kantha": "Nakshi Kantha",
        linen: "Linen",
        Khadi: "Khadi",
        "tangail-taant": "Tangail Taant",
        Monipuri: "Monipuri",
        "dhakai-Benaroshi": "Dhakai Benaroshi",
      },
      {
        clothes: "Clothes",
        tshirt: "Tshirt",
        shorts: "Shorts",
        shirt: "Shirt",
        tracksuit: "Tracksuit",
        jeans: "Jeans",
        georgette: "Georgette",
        waistcoat: "Waistcoat",
        sweater: "Sweater",
        coats: "coats",
        suit: "Suit",
        sweatshirt: "Sweatshirt",
        uniform: "Uniform",
      },
      {
        cosmetic: "Cosmetic",
        perfume: "Perfume",
        "eye-make-up": "Eye make-up",
        "skin-care": "Skin care",
        "hair-care": "Hair care",
        "make-up": "Make-up",
        "oral-care": "Oral Care",
        "body-care": "Body Care",
        "sanitary-pad": "Sanitary pad",
        "shower-gels-creams": "Shower Gels & Creams",
        "hair-removal-products": "Hair Removal Products",
        lipstick: "Lipstick",
        "suntan-cream": "Suntan cream",
      },
      {
        "sports-outdoor": "Sports & Outdoor",
        sweatshirt: "Sweatshirt",
        "t-shirt": "Shirt",
        "sports-bra": "Sports Bra",
        leggings: "Leggings",
        tracksuit: "Tracksuit",
        "running-shoes": "Running Shoes",
        "sports-bag": "Sports Bag",
        "sports-equipment": "Sports Equipment",
        "outdoor-shoes": "Outdoor Shoes",
        "snow-boot": "Snow Boot",
        "outDoor-equipment": "OutDoor Equipment",
        "sports-accessories": "Sports Accessories",
      },
      {
        "personal-care": "Personal Care",
        perfume: "Perfume",
        "Sexual-health": "Sexual Health",
        "after-shave-products": "After Shave Products",
        "razor-blades": "Razor Blades",
        shoes: "Shoes",
        "heeled-shoes": "Heeled Shoes",
        sneakers: "Sneakers",
        "casual-shoes": "Casual Shoes",
        babet: "Babet",
        sandals: "Sandals",
        slippers: "Slippers",
      },
    ],
  },
  {
    category: "Men's Fashion",
    path: "mens-fashion",
  },
  {
    category: "Kid's Fashion",
    path: "kids-fashion",
  },
  {
    category: "Home & Lifestyle",
    path: "home-lifestyle",
  },
  {
    category: "Arts & Crafts",
    path: "arts-crafts",
  },
  {
    category: "Computer & Electronics",
    path: "computer-electronics",
  },
  {
    category: "Food & Grocery",
    path: "food-grocery",
  },
];

const Header: React.FC<HeaderProps> = () => {
  function SampleNextArrow(props: {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
  }) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute !right-0 !top-0 flex items-center justify-center ml-auto mt-[7.4%]`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <Image className="slider-img" src={arrowRight} alt="arrowTop" />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    nextArrow: <SampleNextArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      /* {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }, */
    ],
  };
  const path = usePathname();
  return (
    <nav className=" h-[151px] py-5">
      <div className="bg-[#FBFBFB] px-4">
        {/* top bar */}
        <div className="xl:container xl:flex-row flex-wrap xl:flex-nowrap container mx-auto flex   justify-between items-center  gap-4 xl:gap-[75px] ">
          {/* logo */}
          <Link className="order-1 xl:order-1 w-[120px]" href={"/"}>
            <Image src={logo} alt="logo" width={120} height={50} />
          </Link>
          {/* search bar */}
          <div className="w-full xl:w-[778px] h-[50px] order-3 flex justify-center items-center xl:order-2">
            <div className="bg-gray-400 w-full h-full">
              <form action="/search" className=" px-4 w-full h-full">
                <div className="relative w-full h-full">
                  <input
                    type="text"
                    name="q"
                    className="bg-[#F1F1F1] w-full border-none h-full p-3 rounded-md outline-none"
                    placeholder="search"
                  />

                  <button
                    type="submit"
                    className="bg-primary p-2 rounded-tr-md rounded-br-md absolute right-0 top-0 border-none w-[65px] h-full items-center justify-center flex"
                  >
                    <Image src={search} alt="logo" width={20} height={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* login, wishlist, cart */}
          <div className="flex gap-5 xl:order-3 order-2">
            <Link
              href="/login"
              className="flex items-center justify-center gap-3"
            >
              <Image
                src={loginIcon}
                alt="login avatar"
                width={24}
                height={24}
              />
              <span className="hidden xl:block">Login</span>
            </Link>
            <Link
              href="/wishlist"
              className="flex items-center justify-center gap-3"
            >
              <Image src={heart} alt="Wishlist" width={24} height={24} />
              <span className="hidden xl:block">Wishlist</span>
            </Link>
            <Link
              href="/cart"
              className="flex items-center justify-center gap-3 relative"
            >
              <Image src={cart} alt="cart" width={24} height={24} />
              <div className="flex gap-2 items-center justify-center">
                <span className="hidden xl:block">My cart</span>
                <p className="w-5 flex items-center justify-center h-5 absolute  right-1 -top-2 xl:right-0 xl:top-0 xl:relative bg-secondary xl:bg-red rounded-full text-[#fff] ">
                  <span className="text-xs">1</span>
                </p>
              </div>
            </Link>
          </div>
        </div>
        {/* bottom bar */}
        <div className="mt-5 xl:mt-9 border-b-[1px] border-[#EFEEEE] bg-[#FBFBFB] px-10 md:px-0">
          <div className="xl:container mx-auto relative group">
            <ul
            /*       className="grid grid-cols-4 justify-items-center xl:flex items-center justify-around" */
            >
              <Slider {...settings} className="w-full text-center h-full">
                {categories.map((item, index) => (
                  <li
                    key={index}
                    className={`${
                      path === `/category/${item.path}`
                        ? "text-secondary border-secondary"
                        : "border-[#fbfbfb]"
                    } pb-[10px] border-b-[2px] font-medium  text-[10px] xl:text-base`}
                  >
                    <Link href={`/category/${item.path}`}>{item.category}</Link>
                  </li>
                ))}
              </Slider>
            </ul>

            {/* hover mega menu */}
            <div className="hidden absolute left-0 mt-1 space-x-2 bg-white rounded-lg px-[73px] py-[36px] bg-[#fff] group-hover:block xl:container mx-auto z-10">
              <div className="grid grid-cols-1 xl:grid-cols-5 gap-4">
                {categories[0]?.subcategories?.map((subcategory, index) => {
                  const subcategoryName = Object.values(subcategory)[0];
                  return (
                    <div key={index}>
                      <div>
                        <Link href={Object.keys(subcategory)[0]}>
                          <h2 className="text-lg font-semibold text-tertiary">
                            {subcategoryName}
                          </h2>
                        </Link>
                        <ul>
                          {Object.keys(subcategory)
                            .slice(1)
                            .map((key, subIndex) => (
                              <li key={subIndex}>
                                <Link href={`/category/${key}`}>
                                  <span className="text-sm text-[#757575]">
                                    {subcategory[key]}
                                  </span>
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
