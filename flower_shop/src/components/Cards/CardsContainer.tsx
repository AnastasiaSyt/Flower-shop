import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import ICards from '../../types/ICards';
import Card from './Card/Card';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { filterCards } from '../../utils/filterUtils';
import './CardsContainer.scss';

const CardsContainer: FC = () => {
  const cards = useSelector((state: RootState) => state.cards.cards);
  const filter = useSelector((state: RootState) => state.filters);
  const filteredCards = filterCards(cards, filter);

  return (
    <div className="cards" role="cards">
      {filteredCards.map((cardData: ICards, index: number) => {
        return (
          <Link key={index} to={`/product/${cardData.id}`} state={{ cardData }}>
            <Card cardData={cardData} key={index} />
          </Link>
        );
      })}
    </div>
  );
};

export default CardsContainer;
