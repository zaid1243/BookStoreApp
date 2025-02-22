import React, { useEffect, useState } from "react";
import banner from "./../../src/assets/hayseyn.jpeg";

const Banner = () => {
  return (
    <div
      className={`md:h-screen max-w-screen-2xl container mx-auto md:px-20 px-4 mt-14 text-black flex flex-col md:flex-row`}
    >
      <div className=" order-2 md:order-1 w-full md:w-1/2 mt-10 md:mt-22">
        <div className="space-y-7">
          <h1 className="text-4xl font-bold">
            Lorem ipsum, dolor sit amet consectetur
            <span className="text-gray-700"> elit. Excepturi, nobis!</span>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos neque fugit nam voluptatibus numquam molestias sapiente
            provident repudiandae. Ullam, totam.
          </p>
          <label className="w-full input input-bordered flex items-center gap-2 bg-white border-black text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
        </div>
        <button className="btn btn-secondary bg-gray-700 text-white mt-6 border-gray-700">
          Submit
        </button>
      </div>
      <div className=" order-1 w-full md:w-1/2">
        <img
          src={banner}
          alt=""
          className="h-70 md:h-80  w-96 mt-10 md:mt-22 md:mx-14"
        />
      </div>
    </div>
  );
};

export default Banner;
