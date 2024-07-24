import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import RecipeList from '../components/RecipeList';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

const Home = ({ recipes }) => {
  const titleRef = useRef(null);
  const linkRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    
    gsap.fromTo(titleRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
    
    
    gsap.fromTo(linkRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });

    
    gsap.fromTo(listRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 1 });
  }, []);

  return (
    <div className="home-container">
      <h1 ref={titleRef} className="home-title">Sahtein!</h1>
      <Link ref={linkRef} to="/create" className="create-link">Create New Recipe</Link>
      <div ref={listRef}>
        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
};

export default Home;
