import React, { useState, useEffect } from 'react';
import { getComments } from '../services/api';

const CommentList = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await getComments();
        setComments(data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div>
      <h1>Comments</h1>
      <ul>
        {comments.map(comment => (
          <li key={comment.comment_id}>{comment.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
