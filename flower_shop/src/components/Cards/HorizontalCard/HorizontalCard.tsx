import React, { type FC } from 'react';
import ICards from '../../../types/ICards';
import arrow_right from '../../../assets/arrow-right.svg';
import { useNavigate } from 'react-router-dom';
import './HorizontalCard.scss';
import CartLabel from '../CartLabel/CartLabel';

interface CardProps {
  cardData: ICards;
}

const HorizontalCard: FC<CardProps> = ({ cardData }: CardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${cardData.id}`, { state: { cardData } });
  };

  return (
    <div className="horizontal_card" onClick={handleClick}>
      <img className="horizontal_thumbnail" src={cardData.thumbnail} />
      <div className="horizontal_card_content">
        <div className="horizontal_card_text">
          <p className="horizontal_card_title">{cardData.title}</p>
          <p className="horizontal_card_description">{cardData.description}</p>
          <p className="horizontal_price_card">${cardData.price}</p>
        </div>
      </div>
      <div className="horizontal_card_right">
        <div className="horizontal_card_more_container">
          <p className="horizontal_card_more">подробнее</p>
          <img className="horizontal_card_icon" src={arrow_right} />
        </div>
        <CartLabel item="listItem" />
      </div>
    </div>
  );
};

export default HorizontalCard;
