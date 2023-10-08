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
import { Category } from "@/types";

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
