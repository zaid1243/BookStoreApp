import React from "react";

function Cards({ price, item, image, name, category }) {
  console.log(item);
  return (
    <div className=" scale-90 md:scale-100 hover:scale-105 duration-300">
      <div className="card bg-white scale-90  shadow-2xl border-black p-2">
        <figure>
          <img src={image} alt="Shoes" className="h-78" />
        </figure>
        <div className="card-body">
          <h2 className=" text-white card-title">{name}</h2>
          <div className="bg-black border-black text-white badge badge-secondary ">
            {category}
          </div>

          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-between ">
            <div className="scale-86 badge bg-white text-black border-black hover:bg-black hover:text-white duration-300">
              ${price}
            </div>
            <div className="scale-86 badge bg-white text-black  border-black hover:bg-black hover:text-white duration-300 active:scale-95 cursor-pointer">
              Buy now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
