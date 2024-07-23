import React from 'react';
import '../Styles/shareDownload.css';

const ShareDownload = ({ recipe }) => {
  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([JSON.stringify(recipe, null, 2)], { type: 'application/json' });
    element.href = URL.createObjectURL(file);
    element.download = `${recipe.name}.json`;
    document.body.appendChild(element);
    element.click();
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Recipe URL copied to clipboard');
  };

  return (
    <div className="share-download">
      <button onClick={handleShare}>Share</button>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default ShareDownload;
