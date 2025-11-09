// src/components/atlanta.jsx
import React, { useState } from 'react';
import BackButton from './BackButton';
import Lightbox from './Lightbox';
import '../App.css';

export default function Atlanta() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const images = [
    { src: '/images/atlantaImage1.jpg', caption: "Spencer 'Handtastic' Lancaster (2021)" },
    { src: '/images/stark.jpg',         caption: 'Post Covid Atlanta' },
    { src: '/images/church.jpg',        caption: '' },
    { src: '/images/church2.jpg',       caption: '' },
    { src: '/images/---_00057.jpg',     caption: '' },
    // add more as needed
  ];

  const openLightbox  = (img) => { setActive(img); setOpen(true); };
  const closeLightbox = () => setOpen(false);

  return (
    <div className="gallery-page atlanta-gallery">
      {/* Show back button only when not viewing image */}
      {!open && <BackButton />}

      <h1>Atlanta 2021</h1>

      <div className="image-grid">
        {images.map((img, i) => (
          <div className="image-item" key={i}>
            <img
              src={img.src}
              alt={img.caption || `Atlanta photo ${i + 1}`}
              onClick={() => openLightbox(img)}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {open && active && (
        <Lightbox
          src={active.src}
          alt={active.caption || ''}
          caption={active.caption}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
}
