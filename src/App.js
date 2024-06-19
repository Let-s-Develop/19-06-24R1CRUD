import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('');

  // Function to add an item
  const addItem = () => {
    if (!inputValue.trim()) return;
    setItems([...items, { id: Date.now(), value: inputValue }]);
    setInputValue('');
  };

  // Function to delete an item
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Function to update an item
  const updateItem = (id, newValue) => {
    const updatedItems = items.map(item => 
      item.id === id ? { ...item, value: newValue } : item
    );
    setItems(updatedItems);
  };

  // Filtered list based on user input
  const filteredItems = items.filter(item =>
    item.value.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="app">
      <h1>CRUD Operations with React</h1>
      <input
        className="input-field"
        type="text"
        placeholder="Add new item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="button" onClick={addItem}>Add Item</button>
      <input
        className="input-field"
        type="text"
        placeholder="Filter items"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id} className="item">
            <input
              className="input-edit"
              type="text"
              value={item.value}
              onChange={(e) => updateItem(item.id, e.target.value)}
            />
            <button className="button" onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
