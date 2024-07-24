import React, { useState } from 'react';
import { createStar } from '../services/api';

const CreateStar = () => {
  const [star, setStar] = useState({
    recipes_id: 1, // Change as needed
    user_id: 1 // Change as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStar({ ...star, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createStar(star);
      console.log('Star created:', response);
      
    } catch (error) {
      console.error('Error creating star:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Star Recipe</h2>
      <label>
        User ID:
        <input type="number" name="user_id" value={star.user_id} onChange={handleChange} required />
      </label>
      <button type="submit">Star</button>
    </form>
  );
};

export default CreateStar;
