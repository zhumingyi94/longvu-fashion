import React from 'react';

const VideoHeader = () => {
  const containerStyle = {
    width: '1920px',
    height: '134px',
    overflow: 'hidden',
    position: 'relative' as const,
    margin: '214px auto',
  };

  const videoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    position: 'absolute' as const,
    top: 0,
    left: 0,
  };

  const textContainerStyle = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  };

  const textStyle = {
    color: '#FFF',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '46.859px',
    fontStyle: 'normal' as const,
    lineHeight: 'normal',
    letterSpacing: '14.058px',
  };

  return (
    <div style={containerStyle}>
      <video autoPlay loop muted style={videoStyle}>
        <source src="/BGVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={textContainerStyle}>
        <h1 style={textStyle}>
          <span style={{ fontWeight: 200 }}>LONG VU'S</span>{' '}
          <span style={{ fontWeight: 700 }}>DESIGN</span>
        </h1>
      </div>
    </div>
  );
};

export default VideoHeader;