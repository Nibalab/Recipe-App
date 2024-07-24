import axios from 'axios';

const API_BASE_URL = 'http://localhost/recipe-app-backend/apis';

// Recipes API
export const getRecipes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/recipes/read.php`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

export const createRecipe = async (recipe) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/recipes/create.php`, recipe, {
      headers: { 'Content-Type': 'application/json' }
    });
    return response.data;
  } catch (error) {
    console.error('Error creating recipe:', error);
    throw error;
  }
};

export const updateRecipe = async (recipe) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/recipes/update.php`, recipe, {
      headers: { 'Content-Type': 'application/json' }
    });
    return response.data;
  } catch (error) {
    console.error('Error updating recipe:', error);
    throw error;
  }
};

export const deleteRecipe = async (recipeId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/recipes/delete.php`, {
      headers: { 'Content-Type': 'application/json' },
      data: { recipes_id: recipeId }
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting recipe:', error);
    throw error;
  }
};

// Comments API
export const getComments = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/comments/read.php`);
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};

export const createComment = async (comment) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/comments/create.php`, comment, {
      headers: { 'Content-Type': 'application/json' }
    });
    return response.data;
  } catch (error) {
    console.error('Error creating comment:', error);
    throw error;
  }
};

export const updateComment = async (comment) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/comments/update.php`, comment, {
      headers: { 'Content-Type': 'application/json' }
    });
    return response.data;
  } catch (error) {
    console.error('Error updating comment:', error);
    throw error;
  }
};

export const deleteComment = async (commentId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/comments/delete.php`, {
      headers: { 'Content-Type': 'application/json' },
      data: { comment_id: commentId }
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting comment:', error);
    throw error;
  }
};

// Shared Recipes API
export const getSharedRecipes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/sharedrecipes/read.php`);
    return response.data;
  } catch (error) {
    console.error('Error fetching shared recipes:', error);
    throw error;
  }
};

export const createSharedRecipe = async (sharedRecipe) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/sharedrecipes/create.php`, sharedRecipe, {
      headers: { 'Content-Type': 'application/json' }
    });
    return response.data;
  } catch (error) {
    console.error('Error creating shared recipe:', error);
    throw error;
  }
};

export const updateSharedRecipe = async (sharedRecipe) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/sharedrecipes/update.php`, sharedRecipe, {
      headers: { 'Content-Type': 'application/json' }
    });
    return response.data;
  } catch (error) {
    console.error('Error updating shared recipe:', error);
    throw error;
  }
};

export const deleteSharedRecipe = async (sharedRecipedId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/sharedrecipes/delete.php`, {
      headers: { 'Content-Type': 'application/json' },
      data: { sharedReciped_id: sharedRecipedId }
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting shared recipe:', error);
    throw error;
  }
};

// Stars API
export const getStars = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/stars/read.php`);
    return response.data;
  } catch (error) {
    console.error('Error fetching stars:', error);
    throw error;
  }
};

export const createStar = async (star) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/stars/create.php`, star, {
      headers: { 'Content-Type': 'application/json' }
    });
    return response.data;
  } catch (error) {
    console.error('Error creating star:', error);
    throw error;
  }
};

export const updateStar = async (star) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/stars/update.php`, star, {
      headers: { 'Content-Type': 'application/json' }
    });
    return response.data;
  } catch (error) {
    console.error('Error updating star:', error);
    throw error;
  }
};

export const deleteStar = async (starId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/stars/delete.php`, {
      headers: { 'Content-Type': 'application/json' },
      data: { stars_id: starId }
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting star:', error);
    throw error;
  }
};

// Users API
export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/read.php`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const createUser = async (user) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/create.php`, user, {
      headers: { 'Content-Type': 'application/json' }
    });
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const updateUser = async (user) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/users/update.php`, user, {
      headers: { 'Content-Type': 'application/json' }
    });
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/users/delete.php`, {
      headers: { 'Content-Type': 'application/json' },
      data: { user_id: userId }
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};
