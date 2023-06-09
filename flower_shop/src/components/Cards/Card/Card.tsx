import React, { type FC, useState } from "react";
import "./Card.css";
import { ICards } from "../../../types/ICards";
import arrow_right from "../../../assets/arrow-right.svg";
import cart_icon from "../../../assets/add_cart.svg";

interface CardProps {
  cardData: ICards;
  key: number;
}

const Card: FC<CardProps> = ({ cardData }: CardProps) => {
  return (
    <div className="card">
      <img className="thumbnail" src={cardData.thumbnail} />
      <div className="card_content">
        <p className="card_title">{cardData.title}</p>
        <div className="card_text">
          <p className="price_card">${cardData.price}</p>
          <img className="card_icon" src={arrow_right} />
        </div>
        <div className="cart_tag">
          <img src={cart_icon} />
          <p className="text_tag">добавить</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
