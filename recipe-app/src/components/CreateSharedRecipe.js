import React, { useState } from 'react';
import { createSharedRecipe } from '../services/api';

const CreateSharedRecipe = () => {
  const [sharedRecipe, setSharedRecipe] = useState({
    recipeId: 1, // Change as needed
    sharedBy: 1, // Change as needed
    sharedTo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSharedRecipe({ ...sharedRecipe, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createSharedRecipe(sharedRecipe);
      console.log('Shared recipe created:', response);
      
    } catch (error) {
      console.error('Error creating shared recipe:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Share Recipe</h2>
      <label>
        Share To:
        <input type="text" name="sharedTo" value={sharedRecipe.sharedTo} onChange={handleChange} required />
      </label>
      <button type="submit">Share</button>
    </form>
  );
};

export default CreateSharedRecipe;
