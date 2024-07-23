import React from 'react';
import RecipeList from '../components/RecipeList';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

const Home = ({ recipes }) => {
  return (
    <div className="home-container">
      <h1 className="home-title">Recipe App</h1>
      <Link to="/create" className="create-link">Create New Recipe</Link>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default Home;
