import { FC } from "react";
import { Link } from "react-router-dom";
import ICards from "../../types/ICards";
import Card from "./Card/Card";
import { useNavigate } from "react-router";

const CardsContainer: FC<{ cards: ICards[] }> = ({ cards }) => {
  const navigate = useNavigate();

  const handleCardClick = (cardData: ICards) => {
    navigate(`/product/${cardData.id}`, { state: { cardData } });
  };

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
