import React, { useState } from 'react';
import './ColorList.scss';
import arrow_up from '../../../assets/arrow-drop-up.svg';
import arrow_down from '../../../assets/arrow-drop-down.svg';
import COLORS from '../../../constants/colors';
import { useDispatch } from 'react-redux';
import { setColorFilter } from '../../../Redux/filterSlice';

interface ColorListProps {
  title: string;
}

const ColorList: React.FC<ColorListProps> = ({ title }) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
    console.log(color);
    dispatch(setColorFilter([color]));
  };

  return (
    <div>
      <button onClick={handleToggleCollapse} className="filter_header">
        <p className="filter_header_title">{title}</p>
        {collapsed ? (
          <img src={arrow_up} alt="arrow-up" />
        ) : (
          <img src={arrow_down} alt="arrow-down" />
        )}
      </button>
      {collapsed && (
        <div className="color-filter">
          {COLORS.map((color, index) => (
            <div
              key={index}
              className={`color-circle ${selectedColor === color ? 'selected' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorList;
