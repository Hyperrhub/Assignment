import React, { useState } from 'react';

const MultiSelect = ({ options }) => {
    const [showOptions, setShowOptions] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const handleToggleOptions = () => {
      setShowOptions(!showOptions);
    };
  
    const handleSelect = (item) => {
      let updatedSelectedItems;
      if (selectedItems.includes(item)) {
        // If item is already selected, remove it
        updatedSelectedItems = selectedItems.filter(
          (selected) => selected !== item
        );
      } else {
        // If item is not selected, add it
        updatedSelectedItems = [...selectedItems, item];
      }
  
      // Update the input value with selected items
      setSelectedItems(updatedSelectedItems);
      setInputValue(updatedSelectedItems.join(', '));
    };
  
    const handleRemove = (item) => {
      // Remove selected item and update the input value
      const updatedSelectedItems = selectedItems.filter(
        (selected) => selected !== item
      );
      setSelectedItems(updatedSelectedItems);
      setInputValue(updatedSelectedItems.join(', '));
    };
  
    const filteredOptions = options.filter(
      (option) => !selectedItems.includes(option)
    );
    return (
      <div>
        <input
        style={{width:"500px"}}
          type="text"
          value={inputValue}
          placeholder="Select options..."
          onClick={handleToggleOptions}
        //   readOnly // Make the input field read-only to prevent direct editing
        >
        {/* <button onClick={() => handleRemove(item)}>x</button> */}
        </input>
        {showOptions && (
          <ul>
            {filteredOptions.map((option) => (
                <li key={option} onClick={() => handleSelect(option)}>
                  
                {option}
                
              </li>
            ))}
          </ul>
        )}
        {selectedItems.length > 0 && (
          <div>
            <ul>
              {selectedItems.map((item) => (
                <li key={item}>
                  {item}{' '}
                  <button onClick={() => handleRemove(item)}>x</button>
                </li>
              ))}
            </ul>
          </div>
        )}
        
      </div>
    );
  };
export default MultiSelect;

