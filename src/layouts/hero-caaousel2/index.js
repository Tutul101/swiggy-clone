import React from "react";
import _get from "lodash/get";
import "../hero-carousel1/hero-carousel1.scss";
import Headline from "../../components/headline";
import RestrauntCard from "../../components/restraunt-card";

const HeroCarousel2 = ({ cards }) => {
  //   console.log("Hero Carousel 2", cards);
  const headline = _get(cards, ["header", "title"], "");
  const restaurants = _get(
    cards,
    ["gridElements", "infoWithStyle", "restaurants"],
    []
  );
  console.log("restraunts list", restaurants);
  if (restaurants.length === 0) {
    return null;
  }
  return (
    <div className="hero-caraousel-wrapper">
      <div className="hero-caraousel-title-wrapper">
        <Headline title={headline} />
      </div>
      <div>
        <RestrauntCard
          image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4"
          name="KFC"
          rating={4.3}
          deliveryTime="25-30 mins"
          cuisines={["Burgers", "Biryani", "American", "Snacks", "Fast Food"]}
          location="Saltlake"
        />
      </div>
    </div>
  );
};

export default HeroCarousel2;
