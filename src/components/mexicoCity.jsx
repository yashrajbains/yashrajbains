// src/components/mexicoCity.jsx
import React, { useState } from 'react';
import BackButton from './BackButton';
import Lightbox from './Lightbox';
import '../App.css';

export default function MexicoCity() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const images = [
    { src: '/images/cathedral.jpg',      caption: '' },
    { src: '/images/cathedralFlag.jpg',  caption: '' },
    { src: '/images/chinatown.jpg',      caption: '' },
    { src: '/images/street.jpg',         caption: '' },
    // add more as needed
  ];

  const openLightbox  = (img) => { setActive(img); setOpen(true); };
  const closeLightbox = () => setOpen(false);

  return (
    <div className="gallery-page mexico-gallery">
      {/* Hide back button while viewing lightbox */}
      {!open && <BackButton />}

      <h1>Mexico City 2025</h1>

      <div className="image-grid">
        {images.map((img, i) => (
          <div className="image-item" key={i}>
            <img
              src={img.src}
              alt={img.caption || `Mexico City photo ${i + 1}`}
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
