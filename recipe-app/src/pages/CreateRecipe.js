import React from 'react';
import RecipeForm from '../components/RecipeForm';
import GoBackButton from '../components/GoBackButton';
import '../Styles/CreateRecipe.css';

const CreateRecipe = ({ addRecipe }) => {
  return (
    <div className="create-recipe">
      <GoBackButton />
      <h1>Create a New Recipe</h1>
      <RecipeForm addRecipe={addRecipe} />
    </div>
  );
};

export default CreateRecipe;
