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
import {
  Category,
  CategoryItem,
  Product,
  QuickLinks,
  cartItem,
  footerItem,
  review,
  socialLinkIcon,
} from "@/types";

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

import linkedinIcon from "@/assets/linkedin.svg";
import twitterIcon from "@/assets/twitter.svg";
import facebookIcon from "@/assets/facebook.svg";
import whatsupIcon from "@/assets/whatsup.svg";
import link from "@/assets/link.svg";

import vanille from "@/assets/reviews/vanille.svg";
import maduin from "@/assets/reviews/maduin.svg";
import samantha from "@/assets/reviews/samantha.svg";
import roveria from "@/assets/reviews/roveria.svg";

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
export const categoriesItem: CategoryItem[] = [
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

export const products: Product[] = [
  {
    id: "101",
    title: "Headrest Executive Mesh Office Chair set",
    image: headrest,
    price: 99.99,
    rating: 4.5,
    category: ["Womens Fashion", "Saree", "Silk", "home lifestyle"],
    offer: "25% off",
  },
  {
    id: "102",
    title: "Women fashion dress set",
    image: womenFashion,
    price: 29.99,
    rating: 4.2,
    category: [
      "Womens Fashion",
      "Men's Fashion",
      "Shirt",
      "Cotton",
      "arts crafts",
    ],
    offer: "25% off",
  },
  {
    id: "103",
    title: "Headrest Executive Mesh Office Chair set",
    image: headrestExecutive,
    price: 49.99,
    rating: 4.7,
    category: [
      "Womens Fashion",
      "Cosmetic",
      "Skin care",
      "Personal Care",
      "computer electronics",
    ],
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
      "food grocery",
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
    category: ["Kids Fashion", "Tshirt", "Women's Fashion"],
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

export const icons: socialLinkIcon[] = [
  {
    id: "1",
    image: linkedinIcon,
    path: "www.linkedin.com",
  },
  {
    id: "2",
    image: twitterIcon,
    path: "www.twitter.com",
  },
  {
    id: "3",
    image: facebookIcon,
    path: "www.facebook.com",
  },
  {
    id: "4",
    image: whatsupIcon,
    path: "www.whatsapp.com",
  },
  {
    id: "5",
    image: link,
    path: "/",
  },
];

export const reviewsData: review[] = [
  {
    id: "1",
    name: "Vanille",
    rating: "5.0",
    date: "1 Month Ago",
    image: vanille,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    id: "2",
    name: "Maduin",
    rating: "5.0",
    date: "1 Month Ago",
    image: maduin,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    id: "3",
    name: "Samantha",
    rating: "5.0",
    date: "1 Month Ago",
    image: samantha,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    id: "4",
    name: "Roveria",
    rating: "5.0",
    date: "1 Month Ago",
    image: roveria,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
];

export const cartItems: cartItem[] = [
  {
    id: "12314124124",
    image: clock,
    title: "Headrest Executive Mesh Office Chair set",
    price: 976.33,
  },
  {
    id: "12314124125",
    image: chair2,
    title: "Headrest Executive Mesh Office Chair set",
    price: 976.33,
  },
  {
    id: "12314124126",
    image: image2,
    title: "Headrest Executive Mesh Office Chair set",
    price: 976.33,
  },
];
