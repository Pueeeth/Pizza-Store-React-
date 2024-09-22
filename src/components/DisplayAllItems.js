import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DisplayAllItems.css';

function DisplayAllItems() {
  const [items, setItems] = useState([]);
  const exchangeRate = 83; // Approximate exchange rate

  useEffect(() => {
    axios.get('http://localhost:5000/items')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  return (
    <div className="items-container">
      <h1 className="items-title">Our Pizza Menu</h1>
      <ul className="items-list">
        {items.map(item => (
          <li key={item.id} className="items-list-item">
            <div className="item-details">
              <img src={item.image} alt={item.name} className="item-image" />
              <span>{item.name}</span>
            </div>
            <div className="price-container">
              <span className="items-price">${item.price}</span>
              <span className="items-price-rupees">₹{(item.price * exchangeRate).toFixed(2)}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayAllItems;
