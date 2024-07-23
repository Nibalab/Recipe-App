import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/GoBackButton.css';

const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="go-back-button" onClick={() => navigate('/')}>
      Go Back to Home
    </button>
  );
};

export default GoBackButton;
