import React, { type FC } from "react";
import Card from "./Card/Card";
import { ICards } from "../../types/ICards";
import "./CardsContainer.scss";

const CardsContainer: FC<{ cards: ICards[] }> = ({ cards }) => {
  return (
    <div className="cards" role="cards">
      {cards.map((cardData: ICards, index: number) => {
        return <Card cardData={cardData} key={index} />;
      })}
    </div>
  );
};

export default CardsContainer;
