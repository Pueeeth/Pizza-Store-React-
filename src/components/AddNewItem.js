import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './AddNewItem.css';

function AddNewItem() {
  const initialValues = {
    name: '',
    price: '',
    image: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Pizza name is required'),
    price: Yup.number().required('Price is required').positive('Price must be a positive number'),
    image: Yup.string().url('Invalid URL').required('Image URL is required')
  });

  const onSubmit = (values, { resetForm }) => {
    axios.post('http://localhost:5000/items', values)
      .then(response => {
        alert('Pizza item added successfully!');
        resetForm();
      })
      .catch(error => {
        console.error('There was an error adding the item:', error);
      });
  };

  return (
    <div className="add-item-container">
      <h1 className="add-item-title">Add New Pizza Item</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="add-item-form">
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
              Add Item
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddNewItem;
