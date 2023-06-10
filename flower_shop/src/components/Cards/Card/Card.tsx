import React, { type FC, useState } from "react";
import "./Card.css";
import { ICards } from "../../../types/ICards";
import arrow_right from "../../../assets/arrow-right.svg";
import cart_icon from "../../../assets/add_cart.svg";
import { useNavigate } from "react-router-dom";

interface CardProps {
  cardData: ICards;
}

const Card: FC<CardProps> = ({ cardData }: CardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${cardData.id}`, { state: { cardData } });
  };

  return (
    <div className="card" onClick={handleClick}>
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
