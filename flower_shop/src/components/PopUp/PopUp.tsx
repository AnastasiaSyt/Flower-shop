import React from 'react';
import './PopUp.scss';
import Button from '../../components/Button/Button';

interface PopupProps {
  title: string;
  text: string;
  onClose: () => void;
}

function Popup({ title, text, onClose }: PopupProps) {
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="popup" onClick={handleBackgroundClick}>
      <span className="close-button" onClick={onClose}>
        &times;
      </span>
      <div className="popup_content">
        <h2 className="popup_title">{title}</h2>
        <p className="popup_text">{text}</p>
        <Button onClick={onClose}>ПОДТВЕРДИТЬ</Button>
      </div>
    </div>
  );
}

export default Popup;
