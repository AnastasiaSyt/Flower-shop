import React, { useState } from "react";
import arrow_up from "../../../assets/arrow-drop-up.svg";
import arrow_down from "../../../assets/arrow-drop-down.svg";
import "./CheckboxList.scss";

interface CheckboxListProps {
  items: string[];
  title: string;
}

const CheckboxList: React.FC<CheckboxListProps> = ({ items, title }) => {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
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
              />
              <label
                className="label_filter"
                htmlFor={`checkbox-${index}-${items.length}`}
              >
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
