import React from 'react';
import './ImageHeader.css'; // Make sure to rename VideoHeader.css to ImageHeader.css

const ImageHeader = () => {
  return (
    <div className="image-header">
      <img src="/home-page-image.jpeg" alt="Header" className="header-image" />
    </div>
  );
};

export default ImageHeader;
