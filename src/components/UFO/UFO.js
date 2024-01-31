import React, { useState, useEffect } from 'react';
import './UFO.css'; 

const UFO = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  
  const generateRandomPosition = () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
  });

  
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  
  const moveUFO = () => {
    setPosition(generateRandomPosition());
  };

  
  useEffect(() => {
    const appearanceInterval = setInterval(toggleVisibility, Math.random() * 5000 + 2000); 
    const movementInterval = setInterval(moveUFO, 1000); 

    return () => {
      clearInterval(appearanceInterval);
      clearInterval(movementInterval);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="ufo"
          style={{ top: position.y, left: position.x }}
        ></div>
      )}
    </>
  );
};

export default UFO;
