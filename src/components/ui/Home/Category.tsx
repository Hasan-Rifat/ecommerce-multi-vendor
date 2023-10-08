import { categories } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import rightArrow from "@/assets/category/right arrow.svg";

type CategoryProps = {};

const Category: React.FC<CategoryProps> = () => {
  return (
    <section className="py-[30px]">
      <div className="mx-auto container xl:container">
        <div>
          <h2 className="text-[#383838] pb-[25px] text-2xl font-medium">
            Category
          </h2>
        </div>
        <div className="grid xl:grid-cols-5 grid-cols-2 gap-4">
          {categories.map((item) => (
            <Link
              className="shadow-md rounded-lg  p-5 bg-[#fff]"
              href={`/category/${item.path}`}
              key={item.id}
            >
              <div className="flex items-center justify-between">
                <Image src={item.icon} alt={item.icon} />
                <h3 className="text-[#394146]">{item.name}</h3>
                <Image src={rightArrow} alt={rightArrow} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Category;
