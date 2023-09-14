import React from 'react';
import './PopUp.scss';

interface PopupProps {
  text: string;
  onClose: () => void;
}

function Popup({ text, onClose }: PopupProps) {
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="popup" onClick={handleBackgroundClick}>
      <div className="popup-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Popup;
