"use client";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import loginIcon from "@/assets/login-icon.svg";
import cart from "@/assets/cart.svg";
import search from "@/assets/search icon.svg";
import heart from "@/assets/Heart.svg";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

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
  const path = usePathname();
  return (
    <nav className=" h-[151px]">
      <div className="bg-[#FBFBFB]">
        {/* top bar */}
        <div className="xl:container mx-auto flex justify-between items-center pt-5 gap-[75px]">
          {/* logo */}
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={120} height={50} />
          </Link>
          {/* search bar */}
          <div className="md:w-[778px] h-[50px]  flex justify-center items-center">
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
          <div className="flex gap-5">
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
              <span>Login</span>
            </Link>
            <Link
              href="/wishlist"
              className="flex items-center justify-center gap-3"
            >
              <Image src={heart} alt="Wishlist" width={24} height={24} />
              <span>Wishlist</span>
            </Link>
            <Link
              href="/cart"
              className="flex items-center justify-center gap-3"
            >
              <Image src={cart} alt="cart" width={24} height={24} />
              <div className="flex gap-2 items-center justify-center">
                <span>My cart</span>
                <p className="w-5 flex items-center justify-center h-5  bg-red rounded-full text-[#fff] ">
                  <span className="text-xs">1</span>
                </p>
              </div>
            </Link>
          </div>
        </div>
        {/* bottom bar */}
        <div className=" mt-9 border-b-[1px] border-[#EFEEEE] bg-[#FBFBFB]">
          <div className="xl:container mx-auto relative group">
            <ul className="flex items-center justify-around">
              {categories.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    path === `/category/${item.path}`
                      ? "text-secondary border-secondary"
                      : "border-[#fbfbfb]"
                  } p-4 border-b-[2px] font-medium`}
                >
                  <Link href={`/category/${item.path}`}>{item.category}</Link>
                </li>
              ))}
            </ul>
            {/* hover mega menu */}
            <div className="hidden absolute left-0 mt-1 space-x-2 bg-white rounded-lg px-[73px] py-[36px] bg-[#fff] group-hover:block xl:container mx-auto">
              <div className="grid grid-cols-5 gap-4">
                {categories[0]?.subcategories?.map((subcategory, index) => (
                  <div key={index}>
                    <div>
                      <Link href={Object.keys(subcategory)[0]}>
                        <h2 className="text-lg font-semibold text-tertiary">
                          {Object.values(subcategory)[0]}
                        </h2>
                      </Link>
                      <ul>
                        <li>
                          <Link
                            href={`/category/${Object.keys(subcategory)[1]}`}
                          >
                            <span className="text-sm text-[#757575]">
                              {Object.values(subcategory)[1]}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`/category/${Object.keys(subcategory)[2]}`}
                          >
                            <span className="text-sm text-[#757575]">
                              {Object.values(subcategory)[2]}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`/category/${Object.keys(subcategory)[3]}`}
                          >
                            <span className="text-sm text-[#757575]">
                              {Object.values(subcategory)[3]}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`/category/${Object.keys(subcategory)[4]}`}
                          >
                            <span className="text-sm text-[#757575]">
                              {Object.values(subcategory)[4]}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`/category/${Object.keys(subcategory)[5]}`}
                          >
                            <span className="text-sm text-[#757575]">
                              {Object.values(subcategory)[5]}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`/category/${Object.keys(subcategory)[6]}`}
                          >
                            <span className="text-sm text-[#757575]">
                              {Object.values(subcategory)[6]}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`/category/${Object.keys(subcategory)[7]}`}
                          >
                            <span className="text-sm text-[#757575]">
                              {Object.values(subcategory)[7]}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`/category/${Object.keys(subcategory)[8]}`}
                          >
                            <span className="text-sm text-[#757575]">
                              {Object.values(subcategory)[8]}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`/category/${Object.keys(subcategory)[9]}`}
                          >
                            <span className="text-sm text-[#757575]">
                              {Object.values(subcategory)[9]}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`/category/${Object.keys(subcategory)[10]}`}
                          >
                            <span className="text-sm text-[#757575]">
                              {Object.values(subcategory)[10]}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`/category/${Object.keys(subcategory)[10]}`}
                          >
                            <span className="text-sm text-[#757575]">
                              {Object.values(subcategory)[10]}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`/category/${Object.keys(subcategory)[11]}`}
                          >
                            <span className="text-sm text-[#757575]">
                              {Object.values(subcategory)[11]}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`/category/${Object.keys(subcategory)[12]}`}
                          >
                            <span className="text-sm text-[#757575]">
                              {Object.values(subcategory)[12]}
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
