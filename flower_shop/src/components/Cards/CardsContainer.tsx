import { FC } from 'react';
import { Link } from 'react-router-dom';
import ICards from '../../types/ICards';
import Card from './Card/Card';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import './CardsContainer.scss';

const CardsContainer: FC = () => {
  const cards = useSelector((state: RootState) => state.cards.cards);

  return (
    <div className="cards" role="cards">
      {cards.map((cardData: ICards, index: number) => {
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
