import React, { useState, useEffect } from 'react';
import './EpicGallery.css';

const EpicGallery = () => {
  const [epicImagesData, setEpicImagesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDescription, setShowDescription] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.nasa.gov/EPIC/api/natural/images?api_key=zOpGoqJdp9tjkydekW65khLKjcx866FQyrV9BJKB');
        const data = await response.json();
        setEpicImagesData(Array.isArray(data) ? data : []); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching NASA EPIC images data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowDescription(!showDescription);
  };

  return (
    <div className="EpicGalleryContainer">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="EpicGallery">
          {epicImagesData.map(image => (
            <div key={image.image} className="image-container" onClick={() => handleImageClick(image)}>
              <img src={`https://api.nasa.gov/EPIC/archive/natural/${image.date.slice(0, 4)}/${image.date.slice(5, 7)}/${image.date.slice(8, 10)}/png/${image.image}.png?api_key=zOpGoqJdp9tjkydekW65khLKjcx866FQyrV9BJKB`} alt="NASA EPIC" />
            </div>
          ))}
        </div>
      )}
      {showDescription && (
        <div className="description">
          <span className="close" onClick={() => setShowDescription(false)}>×</span>
          <img src={`https://api.nasa.gov/EPIC/archive/natural/${selectedImage.date.slice(0, 4)}/${selectedImage.date.slice(5, 7)}/${selectedImage.date.slice(8, 10)}/png/${selectedImage.image}.png?api_key=zOpGoqJdp9tjkydekW65khLKjcx866FQyrV9BJKB`} alt="NASA EPIC" />
          
        </div>
      )}
    </div>
  );
};

export default EpicGallery;
