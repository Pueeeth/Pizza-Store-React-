import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PizzaStore.css';

function PizzaStore() {
  const navigate = useNavigate();

  return (
    <div className="pizza-store-container">
      <h1 className="pizza-store-title">Welcome to Pizza Store</h1>
      <p className="pizza-store-description">The best place to get your favorite pizzas!</p>
      <button className="pizza-store-button" onClick={() => navigate('/home')}>
        Enter the Store
      </button>
    </div>
  );
}

export default PizzaStore;