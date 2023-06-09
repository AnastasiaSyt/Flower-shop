import React, { useState } from "react";
import "./SortDropdown.scss";

interface SortOption {
  value: string;
  label: string;
}

interface SortDropdownProps {
  options: SortOption[];
  onChange: (value: string) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <div className="dropdown">
      <label htmlFor="sortDropdown">Сортировка:</label>
      <select
        id="sortDropdown"
        value={selectedOption}
        onChange={handleOptionChange}
        className="dropdown_option"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="dropdown_option"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortDropdown;
