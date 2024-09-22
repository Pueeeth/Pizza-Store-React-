import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './DeleteItem.css';

function DeleteItem() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/items/${id}`)
      .then(response => {
        setItem(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching item:', err.message);
        setError('Error fetching item.');
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    setLoading(true);
    axios.delete(`http://localhost:5000/items/${id}`)
      .then(() => {
        navigate('/items');
      })
      .catch(err => {
        console.error('Error deleting item:', err.message);
        setError('Error deleting item.');
        setLoading(false);
      });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="delete-item-container">
      <h1>Delete Item</h1>
      {item ? (
        <div>
          <h2>{item.name}</h2>
          <p>Price: ${item.price}</p>
          <button onClick={handleDelete} className="delete-button">Delete</button>
        </div>
      ) : (
        <div>No item found.</div>
      )}
    </div>
  );
}

export default DeleteItem;
