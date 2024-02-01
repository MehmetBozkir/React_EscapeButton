import React, { useState,useEffect } from 'react';
import './MovingButton.css'; 

const MovingButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 7) {
      alert("🖕🖕🖕I don't accept, Go away!🖕🖕🖕");
    }
    
  }, [count]);

  const handleClick = () => {
    const newX = Math.random() * (window.innerWidth * 0.3); 
    const newY = Math.random() * (window.innerHeight * 0.3); 
    setCount(count + 1);

    setPosition({ x: newX, y: newY });
  };

  return (
    <button
      className="moving-button"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      onClick={handleClick}
    >
      NO!
    </button>


  );
};

export default MovingButton;