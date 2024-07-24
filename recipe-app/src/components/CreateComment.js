import React, { useState } from 'react';
import { createComment } from '../services/api';

const CreateComment = () => {
  const [comment, setComment] = useState({
    recipes_id: 1, 
    user_id: 1, 
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createComment(comment);
      console.log('Comment created:', response);
      
    } catch (error) {
      console.error('Error creating comment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Comment</h2>
      <label>
        Content:
        <textarea name="content" value={comment.content} onChange={handleChange} required />
      </label>
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateComment;
