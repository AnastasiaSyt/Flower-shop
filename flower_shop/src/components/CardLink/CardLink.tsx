import React, { type FC } from 'react';
import './CardLink.scss';

interface ILinkCards {
  title: string;
  link: string;
  image: string;
}

interface CardLinkProps {
  cardData: ILinkCards;
}

const CardLink: FC<CardLinkProps> = ({ cardData }: CardLinkProps) => {
  return (
    <div className="card_link">
      <img className="card_link_image" src={cardData.image} />
      <p className="card_title card_link_title">{cardData.title}</p>
    </div>
  );
};

export default CardLink;
