// src/components/newYork.jsx
import React, { useState } from 'react';
import BackButton from './BackButton';
import Lightbox from './Lightbox';
import '../App.css';

export default function NewYork() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null); // { src, caption }

  const images = [
    { src: '/images/nycImage1.jpg', caption: '' },
    { src: '/images/nycImage2.jpg', caption: 'Love the pressure winds from the incoming trains.' },
    {
      src: '/images/nycImage3.jpg',
      caption: ``,
    },
    { src: '/images/nycImage4.jpg', caption: '' },
    { src: '/images/nycImage5.jpg', caption: '' },
    {
      src: '/images/nycImage6.jpg',
      caption: ``,
    },
    // add more as needed
  ];

  const openLightbox  = (img) => { setActive(img); setOpen(true); };
  const closeLightbox = () => setOpen(false);

  return (
    <div className="gallery-page newYork-gallery">
      {/* Hide back button while viewing lightbox */}
      {!open && <BackButton />}

      <h1>NYC, December of 2022</h1>

      <div className="image-grid">
        {images.map((img, i) => (
          <div className="image-item" key={i}>
            <img
              src={img.src}
              alt={img.caption || `New York photo ${i + 1}`}
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
