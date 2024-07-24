import React, { useState, useEffect } from 'react';
import { getSharedRecipes } from '../services/api';

const SharedRecipeList = () => {
  const [sharedRecipes, setSharedRecipes] = useState([]);

  useEffect(() => {
    const fetchSharedRecipes = async () => {
      try {
        const data = await getSharedRecipes();
        setSharedRecipes(data);
      } catch (error) {
        console.error('Error fetching shared recipes:', error);
      }
    };

    fetchSharedRecipes();
  }, []);

  return (
    <div>
      <h1>Shared Recipes</h1>
      <ul>
        {sharedRecipes.map(sharedRecipe => (
          <li key={sharedRecipe.sharedReciped_id}>{sharedRecipe.sharedTo}</li>
        ))}
      </ul>
    </div>
  );
};

export default SharedRecipeList;
