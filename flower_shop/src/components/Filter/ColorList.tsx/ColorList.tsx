import React, { useState } from "react";
import "./ColorList.scss";
import arrow_up from "../../../assets/arrow-drop-up.svg";
import arrow_down from "../../../assets/arrow-drop-down.svg";

interface ColorListProps {
  title: string;
}

const ColorList: React.FC<ColorListProps> = ({ title }) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const colors: string[] = [
    "darkred",
    "white",
    "black",
    "blue",
    "yellow",
    "orange",
    "lime",
    "pink",
    "indigo",
  ];

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
          {colors.map((color, index) => (
            <div
              key={index}
              className={`color-circle ${
                selectedColor === color ? "selected" : ""
              }`}
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
