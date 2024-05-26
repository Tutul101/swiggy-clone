import React, { useRef } from "react";
import _get from "lodash/get";
import { Link } from "react-router-dom";

import { getCollectionID } from "../../utils/utils";
import CusineCard from "../../components/cuisine-card";
import Headline from "../../components/headline";
import NextButton from "../../components/next-button";
import PrevButton from "../../components/prev-button";

import "./hero-carousel1.scss";

const HeroCarousel1 = ({ cards }) => {
  const itemCards = _get(cards, ["imageGridCards", "info"], []);
  const caraouselRef = useRef(null);
  if (itemCards.length === 0) {
    return null;
  }

  const headline = _get(cards, ["header", "title"], "");

  const handleScroll = (direction) => {
    const container = caraouselRef.current;
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
      <div className="carousel-desktop-wrapper" ref={caraouselRef}>
        {itemCards &&
          itemCards.map((cardItem) => {
            const { imageId, action } = cardItem;
            const collectionId = getCollectionID(action.link);
            return (
              <CusineCard
                imageUrl={cardItem && imageId}
                alt={cardItem && action.text}
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
              const collectionId1 = getCollectionID(chunk[0].action.link);
              const collectionId2 = getCollectionID(chunk[1].action.link);
              return (
                <div className="double-cusine" key={index}>
                  <Link to={`cusines/${collectionId1}`}>
                    <CusineCard
                      imageUrl={chunk[0].imageId}
                      alt={chunk[0].action.text}
                    />
                  </Link>
                  <Link to={`cusines/${collectionId2}`}>
                    <CusineCard
                      imageUrl={chunk[1].imageId}
                      alt={chunk[1].action.text}
                    />
                  </Link>
                </div>
              );
            })}
      </div>

      <div className="carousel-border"></div>
    </div>
  );
};

export default HeroCarousel1;
