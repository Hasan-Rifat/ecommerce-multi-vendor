import health from "../assets/category/health.svg";
import kids from "../assets/category/kit.svg";
import toys from "../assets/category/toys.svg";
import groceries from "../assets/category/groceries.svg";
import home from "../assets/category/home.svg";
import men from "@/assets/category/man.svg";
import woman from "@/assets/category/woman.svg";
import stationary from "@/assets/category/stationary.svg";
import leather from "@/assets/category/leather.svg";
import jewelleries from "@/assets/category/jewelleries.svg";
import watches from "@/assets/category/watches.svg";
import men2 from "@/assets/category/men 2.svg";
import tools from "@/assets/category/tool.svg";
import pet from "@/assets/category/pet.svg";
import seasonal from "@/assets/category/seasonal.svg";
import { Category, Product, QuickLinks, footerItem } from "@/types";

import headrest from "@/assets/product/image.svg";
import womenFashion from "@/assets/product/image-5.svg";
import headrestExecutive from "@/assets/product/image-10.svg";
import womenBlack from "@/assets/product/image-15.svg";
import clock from "@/assets/product/image-4.svg";
import char from "@/assets/product/image-6.svg";
import chair2 from "@/assets/product/image-11.svg";
import chair3 from "@/assets/product/image-16.svg";
import image2 from "@/assets/product/image-2.svg";
import image7 from "@/assets/product/image-7.svg";
import image12 from "@/assets/product/image-12.svg";
import image15 from "@/assets/product/image-15.svg";
import image3 from "@/assets/product/image-3.svg";
import image18 from "@/assets/product/image-18.svg";
import lite from "@/assets/product/image-9.svg";
import bag from "@/assets/product/image-14.svg";
import bag2 from "@/assets/product/image-19.svg";

import delivery from "@/assets/footer/delivery.svg";
import best from "@/assets/footer/best.svg";
import returnIcon from "@/assets/footer/return.svg";
import payment from "@/assets/footer/payment.svg";

import facebook from "@/assets/footer/Facebook.svg";
import twitter from "@/assets/footer/Tw.svg";
import linkedin from "@/assets/footer/Ld.svg";
import instagram from "@/assets/footer/instagram.svg";

export const categories: Category = [
  {
    id: 1,
    path: "health-&-household",
    name: "Health & Household",
    icon: health,
  },
  {
    id: 2,
    path: "kids-&-fashion",
    name: "Kids & Fashion",
    icon: kids,
  },
  {
    id: 3,
    path: "toys",
    name: "Toys",
    icon: toys,
  },
  {
    id: 4,
    path: "groceries",
    name: "Groceries",
    icon: groceries,
  },
  {
    id: 5,
    path: "home-&-lifestyle",
    name: "Home & Lifestyle",
    icon: home,
  },
  {
    id: 6,
    path: "men-fashion",
    name: "Men Fashion",
    icon: men,
  },
  {
    id: 7,
    path: "women's-fashion",
    name: "Women's Fashion",
    icon: woman,
  },
  {
    id: 8,
    path: "stationary-&-books",
    name: "Stationary & Books",
    icon: stationary,
  },
  {
    id: 9,
    path: "leather-goods",
    name: "Leather Goods",
    icon: leather,
  },
  {
    id: 10,
    path: "jewelleries",
    name: "Jewelleries",
    icon: jewelleries,
  },
  {
    id: 11,
    path: "watches",
    name: "Watches",
    icon: watches,
  },
  {
    id: 12,
    path: "men-fashion",
    name: "Men Fashion",
    icon: men2,
  },
  {
    id: 13,
    path: "tools-&-hardware",
    name: "Tools & Hardware",
    icon: tools,
  },
  {
    id: 14,
    path: "pet-supplies",
    name: "Pet Supplies",
    icon: pet,
  },
  {
    id: 15,
    path: "seasonal",
    name: "Seasonal",
    icon: seasonal,
  },
];

export const products: Product[] = [
  {
    id: "101",
    title: "Headrest Executive Mesh Office Chair set",
    image: headrest,
    price: 99.99,
    rating: 4.5,
    category: ["Women's Fashion", "Saree", "Silk"],
    offer: "25% off",
  },
  {
    id: "102",
    title: "Women fashion dress set",
    image: womenFashion,
    price: 29.99,
    rating: 4.2,
    category: ["Women's Fashion", "Men's Fashion", "Shirt", "Cotton"],
    offer: "25% off",
  },
  {
    id: "103",
    title: "Headrest Executive Mesh Office Chair set",
    image: headrestExecutive,
    price: 49.99,
    rating: 4.7,
    category: ["Women's Fashion", "Cosmetic", "Skin care", "Personal Care"],
    offer: "25% off",
  },
  {
    id: "104",
    title: "Women black dress and red hat collections",
    image: womenBlack,
    price: 69.99,
    rating: 4.6,
    category: [
      "Women's Fashion",
      "Sports & Outdoor",
      "Running Shoes",
      "Sports Equipment",
    ],
    offer: "25% off",
  },
  {
    id: "105",
    title: "Headrest Executive Mesh Office Chair set",
    image: clock,
    price: 39.99,
    rating: 4.4,
    category: ["Shoes", "clock", "Sneakers", "Casual Shoes"],
    offer: "25% off",
  },
  {
    id: "106",
    title: "Women fashion dress set",
    image: char,
    price: 19.99,
    rating: 4.8,
    category: ["Kid's Fashion", "Tshirt", "Women's Fashion"],
    offer: "25% off",
  },
  {
    id: "107",
    title: "Headrest Executive Mesh Office Chair set",
    image: chair2,
    price: 149.99,
    rating: 4.9,
    category: ["Home & Lifestyle", "Arts & Crafts"],
    offer: "25% off",
  },
  {
    id: "108",
    title: "Headrest Executive Mesh Office Chair set   ",
    image: chair3,
    price: 999.99,
    rating: 4.8,
    category: ["Computer & Electronics"],
    offer: "25% off",
  },
  {
    id: "109",
    title: "Headrest Executive Mesh Office Chair set",
    image: image2,
    price: 79.99,
    rating: 4.7,
    category: ["Food & Grocery"],
    offer: "25% off",
  },
  {
    id: "110",
    title: "Headrest Executive Mesh Office Chair set",
    image: image7,
    price: 79.99,
    rating: 4.7,
    category: ["Food & Grocery"],
    offer: "25% off",
  },
  {
    id: "111",
    title: "Headrest Executive Mesh Office Chair set",
    image: image12,
    price: 79.99,
    rating: 4.7,
    category: ["Food & Grocery"],
    offer: "25% off",
  },
  {
    id: "112",
    title: "Women black dress and red hat collections",
    image: image15,
    price: 79.99,
    rating: 4.7,
    category: ["Food & Grocery"],
    offer: "25% off",
  },
  {
    id: "1113",
    title: "Headrest Executive Mesh Office Chair set",
    image: image3,
    price: 79.99,
    rating: 4.7,
    category: ["Food & Grocery"],
    offer: "25% off",
  },
  {
    id: "113",
    title: "Women fashion dress set ",
    image: womenBlack,
    price: 79.99,
    rating: 4.7,
    category: ["Food & Grocery"],
    offer: "25% off",
  },
  {
    id: "1131",
    title: "Headrest Executive Mesh Office Chair set",
    image: headrestExecutive,
    price: 79.99,
    rating: 4.7,
    category: ["Food & Grocery"],
    offer: "25% off",
  },
  {
    id: "114",
    title: "Women black dress and red hat collections",
    image: image18,
    price: 79.99,
    rating: 4.7,
    category: ["Food & Grocery"],
    offer: "25% off",
  },
  {
    id: "115",
    title: "Headrest Executive Mesh Office Chair set",
    image: clock,
    price: 79.99,
    rating: 4.7,
    category: ["Food & Grocery"],
    offer: "25% off",
  },
  {
    id: "116",
    title: "Women fashion dress set",
    image: lite,
    price: 79.99,
    rating: 4.7,
    category: ["Food & Grocery"],
    offer: "25% off",
  },
  {
    id: "117",
    title: "Headrest Executive Mesh Office Chair set",
    image: bag,
    price: 79.99,
    rating: 4.7,
    category: ["Food & Grocery"],
    offer: "25% off",
  },
  {
    id: "118",
    title: "Women black dress and red hat collections",
    image: bag2,
    price: 79.99,
    rating: 4.7,
    category: ["Food & Grocery"],
    offer: "25% off",
  },
];

export const footerItems: footerItem[] = [
  {
    id: "1",
    icon: delivery,
    title: "FREE SHIPPING",
    description: "Order via Compaign",
  },
  { id: "2", icon: best, title: "BEST PRICE", description: "Quality Products" },
  {
    id: "3",
    icon: returnIcon,
    title: "FREE RETURN",
    description: "Within 7 Days returns",
  },
  {
    id: "4",
    icon: payment,
    title: "SECURE PAYMENT",
    description: "100% secure payment",
  },
];

export const qLinks: QuickLinks[] = [
  { id: "1", path: "about-us", name: "About Us" },
  {
    id: "2",
    path: "contact-us",
    name: "Contact Us",
  },
  {
    id: "4",
    path: "products",
    name: "Products",
  },
  {
    id: "5",
    path: "login",
    name: "Login",
  },
  {
    id: "6",
    path: "sign-up",
    name: "Sign Up",
  },
];

export const customerLinks: QuickLinks[] = [
  { id: "1", path: "my-account", name: "My Account" },
  {
    id: "2",
    path: "orders",
    name: "Orders",
  },
  {
    id: "3",
    path: "terms",
    name: "Terms",
  },
  {
    id: "4",
    path: "privacy-policy",
    name: "Privacy Policy",
  },
  {
    id: "5",
    path: "shipping-information",
    name: "Shipping Information",
  },
];

export const socialLinks = [
  {
    id: 1,
    path: "https://www.facebook.com/",
    name: "Facebook",
    icon: facebook,
  },
  { id: 2, path: "https://www.twitter.com/", name: "Twitter", icon: twitter },
  {
    id: 5,
    path: "https://www.linkedin.com/",
    name: "Linkedin",
    icon: linkedin,
  },
  {
    id: 3,
    path: "https://www.instagram.com/",
    name: "Instagram",
    icon: instagram,
  },
];

export const images: string[] = [
  headrest,
  womenFashion,
  headrestExecutive,
  womenBlack,
  clock,
  char,
  chair2,
  chair3,
  image2,
  image7,
  image12,
  image15,
  image3,
  image18,
];
