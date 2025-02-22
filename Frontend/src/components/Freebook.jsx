import React from "react";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards.jsx";
const Freebook = () => {
  const FilteredData = list.filter((data) => data.category === "free book");

  //   console.log(FilteredData);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="text-black w-full container mx-auto md:px-20 px-4 pb-3">
      <div>
        <h1 className="pb-3 font-bold">Lorem, ipsum dolor.</h1>
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          animi voluptate aliquid quisquam, est dolores laboriosam!
        </p>
      </div>
      <div>
        <div className="m-4">
          <Slider {...settings}>
            {FilteredData.map((item) => (
              <Cards
                item={item}
                key={item.id}
                image={item.image}
                name={item.name}
                category={item.category}
                price={item.price}
              ></Cards>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Freebook;
