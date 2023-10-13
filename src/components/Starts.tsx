import React from "react";
import { ImStarHalf } from "react-icons/im";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import fullStar from "@/assets/Star 3.svg";
import blankStart from "@/assets/Star 5.svg";
import Image from "next/image";
type StartsProps = {
  value: number;
  data?: number;
};

const Starts: React.FC<StartsProps> = ({ value, data }) => {
  const ratingStart = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {value >= index + 1 ? (
          <IoIosStar className="text-[#FFB340]" size={data ? data : 20} />
        ) : value >= number ? (
          <IoIosStarHalf size={data ? data : 20} className="text-[#FFB340]" />
        ) : (
          <Image
            src={blankStart}
            alt="blankStart"
            width={data ? data : 20}
            height={data ? data : 20}
          />
        )}
      </span>
    );
  });
  return <div className="flex gap-[2px]">{ratingStart}</div>;
};
export default Starts;
