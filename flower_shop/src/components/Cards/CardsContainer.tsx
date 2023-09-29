import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useGetFlowersQuery } from '../../services/api';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { filterCards } from '../../utils/filterUtils';
import './CardsContainer.scss';
import Card from './Card/Card';
import HorizontalCard from './HorizontalCard/HorizontalCard';

const CardsContainer: FC = () => {
  const cardView = useSelector((state: RootState) => state.cardView.view);
  const filter = useSelector((state: RootState) => state.filters);
  const searchQuery = useSelector((state: RootState) => state.search.query);

  const { data: cards, isLoading, error } = useGetFlowersQuery(9);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text_red">Error occurred while fetching data.</div>;
  }

  const filteredCards = filterCards(cards || [], filter);

  const filteredAndSearchedCards = filteredCards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderCards = () => {
    if (cardView === 'cards') {
      return filteredAndSearchedCards.map((cardData, index) => (
        <Link key={index} to={`/product/${cardData.id}`} state={{ cardData: cardData }}>
          <Card cardData={cardData} />
        </Link>
      ));
    } else if (cardView === 'list') {
      return filteredAndSearchedCards.map((cardData, index) => (
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
