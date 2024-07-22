import React, { useState } from 'react';
import '../Styles/Home.css';

function CreateRecipe({ addRecipe }) {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ name, ingredients, steps });
    setName('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div>
      <h1>Create a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Recipe Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Ingredients:
            <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Steps:
            <textarea value={steps} onChange={(e) => setSteps(e.target.value)} />
          </label>
        </div>
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
}

export default CreateRecipe;
