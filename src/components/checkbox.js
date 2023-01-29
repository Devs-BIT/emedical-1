import React, { useState } from "react";
import '../public/checkbox.css'
const MultiSelectDropdownMenu = () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
    { value: "option6", label: "Option 6" },
    { value: "option7", label: "Option 7" },
    { value: "option8", label: "Option 8" },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleOptionClick = (selectedOption) => {
    if (selectedOptions.includes(selectedOption)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== selectedOption));
    } else {
      setSelectedOptions([...selectedOptions, selectedOption]);
    }
  };

  return (
    <div className="dropdown">
      <button onClick={handleClick}>
        {selectedOptions.length ? selectedOptions.join(", ") : "Select Options"}
      </button>
      {showMenu && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className={selectedOptions.includes(option.value) ? "selected" : ""}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MultiSelectDropdownMenu;
