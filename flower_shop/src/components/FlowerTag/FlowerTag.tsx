import React from 'react';
import './FlowerTag.scss';

interface FlowerTagProps {
  text: string;
}

const FlowerTag: React.FC<FlowerTagProps> = ({ text }) => {
  return (
    <div className="flower_tag">
      <span className="flower_tag_text">{text}</span>
    </div>
  );
};

export default FlowerTag;
