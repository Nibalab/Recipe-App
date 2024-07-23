import React, { useState } from 'react';
import '../Styles/RecipeForm.css';

const RecipeForm = ({ addRecipe }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({
      id: Date.now().toString(),
      name,
      description,
      ingredients: ingredients.split(','),
      steps: steps.split('\n')
    });
    setName('');
    setDescription('');
    setIngredients('');
    setSteps('');
  };

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Recipe Name"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredients (comma separated)"
        required
      />
      <textarea
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        placeholder="Steps (new line for each step)"
        required
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
