import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import "../../../ AppCss/Appcss.css";
import Slider from "react-slick";
import { MainGameChild } from "../../../css/cssGame";
const GameGenres = () => {
  const { products } = useSelector((state) => state.products);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
  if (products === 0) return <h1>loading...</h1>;
  return (
    <MainGameChild className="mainGameChild">
      <h3> Popular Genres </h3>
      <Slider {...settings}>
        {products.sliceListItem &&
          products.sliceListItem.map((item, index) => {
            return (
              <div key={index} className="pa">
                <Link to={`infoGame/${item.id}`}>
                  <div className="pa-1">
                    <div>
                      <img src={item.imgItem} />
                      <div className="name-item-genres">{item.name}</div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </Slider>
    </MainGameChild>
  );
};
export default GameGenres;
