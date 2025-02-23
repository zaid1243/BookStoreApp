import React, { useEffect, useState } from "react";
import list from "./../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";
const Course = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getBook();
  }, []);
  const bookData = book.filter((item) => item.category === "paid book");
  console.log(bookData);
  return (
    <div className=" container mx-auto md:px-20 px-4 min-h-screen  text-black">
      <div className="mt-26 justify-center items-center text-center">
        <h1 className="text-2xl md:text-3xl font-bold ">
          Lorem ipsum dolor sit amet consectetur{" "}
          <span className="text-gray-700">adipisicing :)</span>
        </h1>
        <p className="mt-11">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius vel
          explicabo enim earum delectus itaque sequi tempora minus iste
          inventore eos obcaecati quaerat, quas, pariatur repellat aspernatur
          blanditiis maiores magni?
        </p>

        <Link to="/">
          <button className="text-white mt-7 active:scale-95 hover:bg-gray-600 duration-300  bg-gray-700 rounded-md px-3 py-1.5">
            Back
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 text-black">
        {bookData.map((item) => (
          <Cards
            item={item}
            key={item.id}
            category={item.category}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Course;
