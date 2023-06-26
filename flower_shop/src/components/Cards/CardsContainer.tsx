import { FC } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card/Card';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { filterCards } from '../../utils/filterUtils';
import './CardsContainer.scss';
import HorizontalCard from './HorizontalCard/HorizontalCard';

const CardsContainer: FC = () => {
  const cardView = useSelector((state: RootState) => state.cardView.view);
  const cards = useSelector((state: RootState) => state.cards.cards);
  const filter = useSelector((state: RootState) => state.filters);
  const filteredCards = filterCards(cards, filter);

  const renderCards = () => {
    if (cardView === 'cards') {
      return filteredCards.map((cardData, index) => (
        <Link key={index} to={`/product/${cardData.id}`} state={{ cardData }}>
          <Card cardData={cardData} />
        </Link>
      ));
    } else if (cardView === 'list') {
      return filteredCards.map((cardData, index) => (
        <Link key={index} to={`/product/${cardData.id}`} state={{ cardData }}>
          <HorizontalCard cardData={cardData} />
        </Link>
      ));
    }
  };

  return (
    <div className={`${cardView}`} role="cards">
      {renderCards()}
    </div>
  );
};

export default CardsContainer;
