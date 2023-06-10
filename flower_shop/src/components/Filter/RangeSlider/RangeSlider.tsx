import React, { useState } from 'react';
import arrow_up from '../../../assets/arrow-drop-up.svg';
import arrow_down from '../../../assets/arrow-drop-down.svg';
import './RangeSlider.scss';

interface RangeSliderProps {
  minValue: number;
  maxValue: number;
  title: string;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ minValue, maxValue, title }) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [values, setValues] = useState<number[]>([minValue, maxValue]);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[name] = Number(value);
      return newValues;
    });
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
        <div className="filter_body">
          <div className="values">
            <span id="range1">{values[0]}</span>
            <span>-</span>
            <span id="range2">{values[1]}</span>
          </div>
          <div className="slider_container">
            <div className="slider_track"></div>
            <input
              type="range"
              name="0"
              min={minValue}
              max={maxValue}
              value={values[0]}
              onChange={handleSliderChange}
              id="slider-1"
            />
            <input
              type="range"
              name="1"
              min={minValue}
              max={maxValue}
              value={values[1]}
              onChange={handleSliderChange}
              id="slider-2"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RangeSlider;
