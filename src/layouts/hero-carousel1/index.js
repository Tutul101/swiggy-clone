import React from "react";
import _get from "lodash/get";

import CusineCard from "../../components/cuisine-card";
import "./hero-carousel1.scss";
import Headline from "../../components/headline";

const HeroCarousel1 = ({ cards }) => {
  console.log("Carousel Cards", cards);
  const itemCards = _get(cards, ["imageGridCards", "info"], []);
  console.log("image cards", itemCards);
  if (itemCards.length === 0) {
    return null;
  }
  const headline = _get(cards, ["header", "title"], "");

  return (
    <div className="hero-caraousel-wrapper">
      <div className="hero-caraousel-title-wrapper">
        <Headline title={headline} />
      </div>
      <div className="carousel-desktop-wrapper">
        {itemCards &&
          itemCards.map((cardItem) => {
            const { imageId, action } = cardItem;
            return (
              <CusineCard
                imageUrl={cardItem && imageId}
                alt={cardItem && action.text}
                key={imageId}
              />
            );
          })}
      </div>
      <div className="carousel-mobile-wrapper">
        {itemCards &&
          itemCards
            .reduce((chunks, cardItem, index) => {
              if (index % 2 === 0) {
                chunks.push(itemCards.slice(index, index + 2));
              }
              return chunks;
            }, [])
            .map((chunk, index) => {
              return (
                <div className="double-cusine" key={index}>
                  <CusineCard
                    imageUrl={chunk[0].imageId}
                    alt={chunk[0].action.text}
                  />
                  <CusineCard
                    imageUrl={chunk[1].imageId}
                    alt={chunk[1].action.text}
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default HeroCarousel1;
