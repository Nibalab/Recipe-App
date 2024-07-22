import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/components/Home.js';
import Recipe from '../src/components/Recipe.js';
import CreateRecipe from '../src/components/CreateRecipe.js';

function App() {
  const [recipes, setRecipes] = useState([
    {
      name: 'Spaghetti Bolognese',
      ingredients: 'Spaghetti, Meat, Tomato Sauce, Garlic, Onion, Olive Oil',
      steps: '1. Boil spaghetti. 2. Cook meat. 3. Add sauce. 4. Combine and serve.'
    },
    {
      name: 'Chicken Curry',
      ingredients: 'Chicken, Curry Powder, Coconut Milk, Garlic, Onion, Rice',
      steps: '1. Cook chicken. 2. Add curry powder. 3. Add coconut milk. 4. Serve with rice.'
    }
  ]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home recipes={recipes} />} />
          <Route path="/recipe/:id" element={<Recipe recipes={recipes} />} />
          <Route path="/create" element={<CreateRecipe addRecipe={addRecipe} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
