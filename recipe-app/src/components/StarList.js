import React, { useState, useEffect } from 'react';
import { getStars } from '../services/api';

const StarList = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const data = await getStars();
        setStars(data);
      } catch (error) {
        console.error('Error fetching stars:', error);
      }
    };

    fetchStars();
  }, []);

  return (
    <div>
      <h1>Stars</h1>
      <ul>
        {stars.map(star => (
          <li key={star.stars_id}>{star.user_id}</li>
        ))}
      </ul>
    </div>
  );
};

export default StarList;
