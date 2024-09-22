// components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? 'sidebar open' : 'sidebar'}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? '<' : '>'}
      </button>

      <nav className={isOpen ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li className="nav-item">
            <Link to="/home" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/items" className="nav-link">Items</Link>
          </li>
          <li className="nav-item">
            <Link to="/add" className="nav-link">Add Item</Link>
          </li>
          <li className="nav-item">
            <Link to="/update/1" className="nav-link">
              Update Item
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/delete/1" className="nav-link">
              Delete Item
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;



