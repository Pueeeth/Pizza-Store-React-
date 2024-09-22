import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/items');
  };

  return (
    <div className="home-container">
      <div className="text-background">
        <h1 className="home-title">Welcome to Pizza Store</h1>
        <p className="home-description">Delicious pizzas made with fresh ingredients.</p>
      </div>
      <button className="home-button" onClick={handleOrderNow}>
        Order Now
      </button>
    </div>
  );
}

export default Home;
