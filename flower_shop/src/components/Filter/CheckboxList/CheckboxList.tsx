import React, { useState } from 'react';
import arrow_up from '../../../assets/arrow-drop-up.svg';
import arrow_down from '../../../assets/arrow-drop-down.svg';
import './CheckboxList.scss';
import { useDispatch } from 'react-redux';
import { setCategoryFilter, setOccasionsFilter, setFlowerFilter } from '../../../Redux/filterSlice';

interface CheckboxListProps {
  items: string[];
  title: string;
}

const CheckboxList: React.FC<CheckboxListProps> = ({ items, title }) => {
  const [collapsed, setCollapsed] = useState(true);
  const dispatch = useDispatch();

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (title === 'тип') {
      dispatch(setCategoryFilter(checked ? [value] : []));
    } else if (title === 'повод') {
      dispatch(setOccasionsFilter(checked ? [value] : []));
    } else if (title === 'цветок') {
      dispatch(setFlowerFilter(checked ? [value] : []));
    }
  };

  return (
    <div>
      <button onClick={handleToggleCollapse} className="filter_header">
        <p className="filter_header_title">{title}</p>
        {collapsed ? <img src={arrow_up} /> : <img src={arrow_down} />}
      </button>

      {collapsed && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <input
                type="checkbox"
                className="custom-checkbox"
                id={`checkbox-${index}-${items.length}`}
                value={item}
                onChange={handleCheckboxChange}
              />
              <label className="label_filter" htmlFor={`checkbox-${index}-${items.length}`}>
                {item}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CheckboxList;
