import React, { type FC } from 'react';
import './Card.scss';
import ICards from '../../../types/ICards';
import arrow_right from '../../../assets/arrow-right.svg';
import { useNavigate } from 'react-router-dom';
import CartLabel from '../CartLabel/CartLabel';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../Redux/cartSlice';

interface CardProps {
  cardData: ICards;
}

const Card: FC<CardProps> = ({ cardData }: CardProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addItem({ productId: cardData.id, quantity: 1 }));
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
        <CartLabel item="cardItem" />
      </div>
    </div>
  );
};

export default Card;
