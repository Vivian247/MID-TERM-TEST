import React, { useState } from 'react';
import './AddProduct.css'; 

export default function AddProduct () {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    category: "",
    quantity: "",
    price: " ",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Product Added!\n\nHere are the product details:\n' +
      `Name: ${productData.name}\n` +
      `Description: ${productData.description}\n` +
      `Category: ${productData.category}\n` +
      `Quantity: ${productData.quantity}\n` +
      `Price: ${productData.price}`
    ); // Show a custom success message
    console.log(productData); // Log the object in the console
  };
  
  return (
    <div>
      <h2>Add a Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={productData.category}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={productData.quantity}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

