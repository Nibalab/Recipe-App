import React from 'react';
import { useParams } from 'react-router-dom';
import RecipeDetail from '../components/RecipeDetail';
import CommentSection from '../components/CommentSection';
import StarRating from '../components/StarRating';
import ShareDownload from '../components/shareDownload';
import GoBackButton from '../components/GoBackButton';
import '../Styles/RecipePage.css';

const RecipePage = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === id);

  const [comments, setComments] = React.useState([]);
  const [rating, setRating] = React.useState(0);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div className="recipe-page">
      <GoBackButton />
      <RecipeDetail recipe={recipe} />
      <StarRating rating={rating} setRating={setRating} />
      <CommentSection comments={comments} addComment={addComment} />
      <ShareDownload recipe={recipe} />
    </div>
  );
};

export default RecipePage;
