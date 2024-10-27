import React from 'react';
import './VideoHeader.css';

const VideoHeader = () => {
  return (
    <div className="video-header">
      <video autoPlay loop muted className="background-video">
        <source src="/loop.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoHeader;
