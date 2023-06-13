import React, { useEffect, useState } from 'react';
import arrow_up from '../../../assets/arrow-drop-up.svg';
import arrow_down from '../../../assets/arrow-drop-down.svg';
import './RangeSlider.scss';
import { useDispatch } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

interface RangeSliderProps {
  minValue: number;
  maxValue: number;
  title: string;
  range: number[];
  setFilter: ActionCreatorWithPayload<number[]>;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  minValue,
  maxValue,
  title,
  range,
  setFilter,
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const dispatch = useDispatch();

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newValues = [...range];
    newValues[Number(name)] = Number(value);
    dispatch(setFilter(newValues));
  };

  useEffect(() => {
    if (range.length === 0) {
      dispatch(setFilter([minValue, maxValue]));
    }
  }, [dispatch, maxValue, minValue, range.length, setFilter]);

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
            <span id="range1">{range.length > 0 ? range[0] : minValue}</span>
            <span className="values_dash">&ndash;</span>
            <span id="range2">{range.length > 0 ? range[1] : maxValue}</span>
          </div>
          <div className="slider_container">
            <div className="slider_track"></div>
            <input
              type="range"
              name="0"
              min={minValue}
              max={maxValue}
              value={range[0] ?? minValue}
              onChange={handleSliderChange}
              id="slider-1"
            />

            <input
              type="range"
              name="1"
              min={minValue}
              max={maxValue}
              value={range[1] ?? maxValue}
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
