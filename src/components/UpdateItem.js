import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './UpdateItem.css';

function UpdateItem() {
  const { id } = useParams(); // Get item ID from URL params
  const [initialValues, setInitialValues] = useState({
    name: '',
    price: '',
    image: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the current item data and set it as initial values
    axios.get(`http://localhost:5000/items/${id}`)
      .then(response => setInitialValues(response.data))
      .catch(error => console.error('Error fetching item:', error));
  }, [id]);

  const validationSchema = Yup.object({
    name: Yup.string().required('Pizza name is required'),
    price: Yup.number().required('Price is required').positive('Price must be a positive number'),
    image: Yup.string().url('Invalid URL').required('Image URL is required')
  });

  const onSubmit = (values) => {
    axios.put(`http://localhost:5000/items/${id}`, values)
      .then(response => {
        alert('Pizza item updated successfully!');
        navigate('/items'); // Redirect to the items page after successful update
      })
      .catch(error => {
        console.error('There was an error updating the item:', error);
      });
  };

  return (
    <div className="update-item-container">
      <h1 className="update-item-title">Update Pizza Item</h1>
      <Formik
        enableReinitialize={true} // Reinitialize form values when initialValues change
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="update-item-form">
            <div className="form-group">
              <label htmlFor="name">Pizza Name</label>
              <Field type="text" id="name" name="name" className="form-control" />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price ($)</label>
              <Field type="number" id="price" name="price" className="form-control" />
              <ErrorMessage name="price" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="image">Image URL</label>
              <Field type="text" id="image" name="image" className="form-control" />
              <ErrorMessage name="image" component="div" className="error-message" />
            </div>

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              Update Item
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UpdateItem;
