import React from 'react';
import './Tag.scss';
import close_icon from '../../../assets/close.svg';

interface TagProps {
  label: string;
  onClose: () => void;
}

const Tag: React.FC<TagProps> = ({ label, onClose }) => {
  return (
    <div className="tag">
      <span className="tag-label">{label}</span>
      <button className="tag-close-button" onClick={onClose}>
        <img className="close_icon" src={close_icon} alt="close icon" />
      </button>
    </div>
  );
};

export default Tag;
