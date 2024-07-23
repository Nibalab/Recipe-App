import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/RecipeList.css';

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-item">
          <h2>{recipe.name}</h2>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`} className="view-link">View Recipe</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
