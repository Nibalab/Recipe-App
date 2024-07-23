import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateRecipe from './pages/CreateRecipe';
import RecipePage from './pages/RecipePage';
import './Styles/App.css';

const App = () => {
  const [recipes, setRecipes] = useState([
    { id: '1', name: 'Spaghetti', description: 'Delicious spaghetti recipe', ingredients: ['spaghetti', 'tomato sauce'], steps: ['Boil water', 'Cook spaghetti', 'Add sauce'] },
    { id: '2', name: 'Pancakes', description: 'Fluffy pancakes', ingredients: ['flour', 'eggs', 'milk'], steps: ['Mix ingredients', 'Cook on skillet'] }
  ]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home recipes={recipes} />} />
        <Route path="/create" element={<CreateRecipe addRecipe={addRecipe} />} />
        <Route path="/recipe/:id" element={<RecipePage recipes={recipes} />} />
      </Routes>
    </Router>
  );
};

export default App;
