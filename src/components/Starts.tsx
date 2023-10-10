import React from "react";
import { ImStarHalf } from "react-icons/im";
import fullStar from "@/assets/Star 3.svg";
import blankStart from "@/assets/Star 5.svg";
import Image from "next/image";
type StartsProps = {
  value: number;
};

const Starts: React.FC<StartsProps> = ({ value }) => {
  const ratingStart = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {value >= index + 1 ? (
          <Image src={fullStar} alt="fullStar" width={16} height={16} />
        ) : value >= number ? (
          <ImStarHalf size={16} className="text-[#fac96b]" />
        ) : (
          <Image src={blankStart} alt="blankStart" width={16} height={16} />
        )}
      </span>
    );
  });
  return <div className="flex gap-[2px]">{ratingStart}</div>;
};
export default Starts;
