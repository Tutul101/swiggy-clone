import React, { useRef } from "react";
import { Link } from "react-router-dom";
import _get from "lodash/get";
import Headline from "../../components/headline";
import RestrauntCard from "../../components/restraunt-card";
import NextButton from "../../components/next-button";
import PrevButton from "../../components/prev-button";

import "../hero-carousel1/hero-carousel1.scss";

const HeroCarousel2 = ({ cards }) => {
  const headline = _get(cards, ["header", "title"], "");
  const restaurants = _get(
    cards,
    ["gridElements", "infoWithStyle", "restaurants"],
    []
  );
  const containerRef = useRef();
  if (restaurants.length === 0) {
    return null;
  }

  const handleScroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = 500;
    const scrollLeft = container.scrollLeft;
    let newScrollLeft;
    if (container) {
      if (direction === "left") {
        newScrollLeft = scrollLeft - scrollAmount;
      } else {
        newScrollLeft = scrollLeft + scrollAmount;
      }

      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="hero-caraousel-wrapper">
      <div className="hero-caraousel-title-wrapper">
        <Headline title={headline} />
        <div className="caraousel-navigation">
          <div onClick={() => handleScroll("left")}>
            <PrevButton />
          </div>
          <div onClick={() => handleScroll("right")}>
            <NextButton />
          </div>
        </div>
      </div>

      <div className="hero-carousel2-wrapper" ref={containerRef}>
        {restaurants &&
          restaurants.map((restraunt) => {
            const { info } = restraunt;
            const deliveryTime = info.sla.slaString;
            return (
              <Link to={`restraunt/${info.id}`} key={info.id}>
                <RestrauntCard
                  image={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`}
                  name={info.name}
                  rating={info.avgRating}
                  deliveryTime={deliveryTime}
                  cuisines={info.cuisines}
                  location={info.areaName}
                />
              </Link>
            );
          })}
      </div>
      <div className="carousel-border"></div>
    </div>
  );
};

export default HeroCarousel2;
