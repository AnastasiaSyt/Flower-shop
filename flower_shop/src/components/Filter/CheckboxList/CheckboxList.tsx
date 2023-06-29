import React, { useState, useEffect } from 'react';
import arrow_up from '../../../assets/arrow-drop-up.svg';
import arrow_down from '../../../assets/arrow-drop-down.svg';
import './CheckboxList.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryFilter, setOccasionsFilter, setFlowerFilter } from '../../../Redux/filterSlice';
import { RootState } from '../../../Redux/store';

interface CheckboxListProps {
  items: string[];
  title: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxList: React.FC<CheckboxListProps> = ({ items, title, onChange }) => {
  const [collapsed, setCollapsed] = useState(true);
  const dispatch = useDispatch();

  const selectedCheckboxes = useSelector((state: RootState) => {
    if (title === 'тип') {
      return state.filters.category;
    } else if (title === 'повод') {
      return state.filters.occasions;
    } else if (title === 'цветок') {
      return state.filters.flower;
    } else {
      return [];
    }
  });

  const [checkboxState, setCheckboxState] = useState<{ [key: string]: boolean }>({});

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (title === 'тип') {
      dispatch(
        setCategoryFilter(
          checked
            ? [...selectedCheckboxes, value]
            : selectedCheckboxes.filter((item) => item !== value)
        )
      );
    } else if (title === 'повод') {
      dispatch(
        setOccasionsFilter(
          checked
            ? [...selectedCheckboxes, value]
            : selectedCheckboxes.filter((item) => item !== value)
        )
      );
    } else if (title === 'цветок') {
      dispatch(
        setFlowerFilter(
          checked
            ? [...selectedCheckboxes, value]
            : selectedCheckboxes.filter((item) => item !== value)
        )
      );
    }

    if (onChange) {
      onChange(event);
    }
  };

  useEffect(() => {
    // Обновляем состояние выбранных флажков
    const updatedCheckboxState: { [key: string]: boolean } = {};
    items.forEach((item) => {
      updatedCheckboxState[item] = selectedCheckboxes.includes(item);
    });
    setCheckboxState(updatedCheckboxState);
  }, [selectedCheckboxes, items]);

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
                id={`checkbox-${index}-${title}`}
                value={item}
                checked={checkboxState[item]}
                onChange={handleCheckboxChange}
              />
              <label className="label_filter" htmlFor={`checkbox-${index}-${title}`}>
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
