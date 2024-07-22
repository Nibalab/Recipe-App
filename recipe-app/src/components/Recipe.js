import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/Recipe.css';

function Recipe({ recipes }) {
  const { id } = useParams();
  const recipe = recipes[id];

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(0);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert('Recipe URL copied to clipboard!');
  };

  return (
    <div>
      <h1>{recipe.name}</h1>
      <h2>Ingredients</h2>
      <p>{recipe.ingredients}</p>
      <h2>Steps</h2>
      <p>{recipe.steps}</p>

      <h2>Comments</h2>
      <div>
        <input
          type="text"
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Add a comment"
        />
        <button onClick={handleCommentSubmit}>Submit</button>
      </div>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>

      <h2>Rating</h2>
      <div>
        <select value={rating} onChange={handleRatingChange}>
          <option value={0}>Rate the recipe</option>
          <option value={1}>1 Star</option>
          <option value={2}>2 Stars</option>
          <option value={3}>3 Stars</option>
          <option value={4}>4 Stars</option>
          <option value={5}>5 Stars</option>
        </select>
        <p>Current rating: {rating} Stars</p>
      </div>

      <h2>Share</h2>
      <button onClick={handleShare}>Share Recipe</button>
    </div>
  );
}

export default Recipe;
