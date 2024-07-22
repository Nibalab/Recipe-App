import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

function Home({ recipes }) {
  return (
    <div>
      <h1>Recipe App</h1>
      <Link to="/create">Create a New Recipe</Link>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <Link to={`/recipe/${index}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
