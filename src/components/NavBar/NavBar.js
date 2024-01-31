import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './NavBar.css';
import NasaApodComponent from '../NasaApodComponent/NasaApodComponent';
import MarsRoverGallery from '../MarsRoverGallery/MarsRoverGallery'; 
import ApodSearch from '../DateSearchForm/Apod/DateSearchForm';  
import EpicSearch from '../DateSearchForm/Epic/DateSearchForm'; 
import MarsSearch from '../DateSearchForm/MarsRover/DateSearchForm'; 

const ShootingStarNavBar = () => {
  const [lightboxImages, setLightboxImages] = useState([]);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleCameraSelect = (images) => {
    setLightboxImages(images);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const hideSubMenu = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <Router>
      <div className="nav-container">
        <nav className="navbar">
          <ul>
            <li>
              <div onClick={toggleSubMenu}>Search</div>
              {isSubMenuOpen && (
                <ul className="submenu">
                  <li><Link to="/search/apod" onClick={hideSubMenu}>APOD</Link></li>
                  <li><Link to="/search/epic" onClick={hideSubMenu}>EPIC</Link></li>
                  <li><Link to="/search/mars" onClick={hideSubMenu}>Mars</Link></li>
                </ul>
              )}
            </li>
            <li>|</li>
            <li>
              <Link to="/photo-of-the-day" onClick={hideSubMenu}>Photo of the Day</Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/mars-rover" onClick={hideSubMenu}>Mars Rover</Link>
              <MarsRoverGallery onCameraSelect={handleCameraSelect} />
            </li>
          </ul>
        </nav>
        <div className="shooting-star"></div>
      </div>
      <Routes>
        <Route path="/search/apod" element={<ApodSearch />} />
        <Route path="/search/epic" element={<EpicSearch />} />
        <Route path="/search/mars" element={<MarsSearch />} />
        <Route path="/photo-of-the-day" element={<NasaApodComponent />} />
      </Routes>
      {lightboxImages.length > 0 && (
        <div className="lightbox">
          <span className="close" onClick={() => setLightboxImages([])}>×</span>
          <div className="scrollable-images">
            {lightboxImages.map((imageSrc, index) => (
              <img key={index} src={imageSrc} alt={`Mars Rover ${index}`} />
            ))}
          </div>
        </div>
      )}
    </Router>
  );
};

export default ShootingStarNavBar;
