import React, { type FC } from 'react';
import './Card.scss';
import ICards from '../../../types/ICards';
import arrow_right from '../../../assets/arrow-right.svg';
import CartLabel from '../CartLabel/CartLabel';

interface CardProps {
  cardData: ICards;
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
      </div>

      <CartLabel item="cardItem" />
    </div>
  );
};

export default Card;
