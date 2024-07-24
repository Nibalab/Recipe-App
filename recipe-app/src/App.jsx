import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateRecipe from './pages/CreateRecipe';
import RecipePage from './pages/RecipePage';
import CommentList from './components/CommentList';
import CreateComment from './components/CreateComment';
import SharedRecipeList from './components/SharedRecipeList';
import CreateSharedRecipe from './components/CreateSharedRecipe';
import StarList from './components/StarList';
import CreateStar from './components/CreateStar';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
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
        <Route path="/comments" element={<CommentList />} />
        <Route path="/create-comment" element={<CreateComment />} />
        <Route path="/shared-recipes" element={<SharedRecipeList />} />
        <Route path="/create-shared-recipe" element={<CreateSharedRecipe />} />
        <Route path="/stars" element={<StarList />} />
        <Route path="/create-star" element={<CreateStar />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/create-user" element={<CreateUser />} />
      </Routes>
    </Router>
  );
};

export default App;
