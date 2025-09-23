import React, { useEffect, useRef } from 'react';
import '../scss/_AlbumCarousel.scss';
import album01 from "../assets/images/album01.avif"
import album02 from "../assets/images/album02.avif"
import album03 from "../assets/images/album03.avif"
import album04 from "../assets/images/album04.avif"
import album05 from "../assets/images/album05.avif"
import { initAlbumCarousel } from '../js/albumCarouselAnimation.js';

const AlbumCarousel = () => {
  const boxesRef = useRef(null);
  const dragProxyRef = useRef(null);
  
  const COVERS = [
    album01,
    album02,
    album03,
    album04,
    album05,
    album01,
    album02,
    album03,
    album04,
    album05,
  ];

  useEffect(() => {
    if (boxesRef.current && dragProxyRef.current) {
      const cleanup = initAlbumCarousel();
      return cleanup;
    }
  }, []);

  return (
    <div className="album-carousel-container">
      <div className="boxes" ref={boxesRef}>
        {COVERS.map((cover, index) => (
          <div 
            key={index}
            className="box" 
            style={{ '--src': `url(${cover})` }}
          >
            <span>{index + 1}</span>
            <img src={cover} alt={`Album ${index + 1}`} />
          </div>
        ))}
        
        <div className="controls">
          {/* <button className="next" type="button">
            <span>Previous album</span>
            <svg viewBox="0 0 448 512" width="100" title="Previous Album">
              <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"/>
            </svg>
          </button> */}
          {/* <button className="prev" type="button">
            <span>Next album</span>
            <svg viewBox="0 0 448 512" width="100" title="Next Album">
              <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"/>
            </svg>
          </button> */}
        </div>
      </div>

      {/* <svg className="scroll-icon" viewBox="0 0 24 24">
        <path 
          fill="currentColor" 
          d="M20 6H23L19 2L15 6H18V18H15L19 22L23 18H20V6M9 3.09C11.83 3.57 14 6.04 14 9H9V3.09M14 11V15C14 18.3 11.3 21 8 21S2 18.3 2 15V11H14M7 9H2C2 6.04 4.17 3.57 7 3.09V9Z"
        />
      </svg> */}

      <div className="drag-proxy" ref={dragProxyRef}></div>
    </div>
  );
};

export default AlbumCarousel;