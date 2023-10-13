"use client";

import React, { useState } from "react";
import Starts from "./Starts";

type AddReviewFormProps = {};

const AddReviewForm: React.FC<AddReviewFormProps> = () => {
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle form submission here, e.g., send the data to an API
    // Reset the form fields after submission
    setName("");
    setEmail("");
    setRating(0);
  };

  return (
    <form className=" max-w-3xl pb-5 md:pb-10" onSubmit={handleSubmit}>
      <div className="mb-8">
        <label
          htmlFor="name"
          className="text-lg text-[#383838] mb-4 inline-block"
        >
          Name *
        </label>
        <input
          type="text"
          id="name"
          className="border border-[#A7A7A7] bg-[#FAFAFA] opacity-50  rounded-[5px] px-3 py-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-8">
        <label
          htmlFor="email"
          className="text-lg text-[#383838] mb-4 inline-block"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          className="border border-[#A7A7A7] bg-[#FAFAFA] opacity-50  rounded-[5px] px-3 py-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-8">
        <label
          htmlFor="review"
          className="text-lg text-[#383838] mb-4 inline-block"
        >
          Review *
        </label>
        <textarea
          // type="text"
          id="review"
          className="border border-[#A7A7A7] bg-[#FAFAFA] opacity-50  rounded-[5px] px-3 py-2 w-full h-[119px]"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        />
      </div>
      <div className="mb-10">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={`${
                index <= (hover || rating) ? "text-[#ffb340]" : "text-[#e9e9e9]"
              }`}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star text-4xl">&#9733;</span>
            </button>
          );
        })}
      </div>
      <button
        type="submit"
        className="bg-secondary text-[#fff] text-lg font-medium  py-3 px-12 rounded-lg"
      >
        Submit
      </button>
    </form>
  );
};
export default AddReviewForm;
