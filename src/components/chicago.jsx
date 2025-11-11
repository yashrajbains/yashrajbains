import React, { useState } from 'react';
import BackButton from './BackButton';
import Lightbox from './Lightbox';
import '../App.css';

export default function Chicago() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const images = [
    { src: '/images/chicagoImage1.jpg', caption: 'My Mom and I' },
    { src: '/images/chicagoImage3.jpg', caption: '' },
    { src: '/images/cloudGate2025.jpg', caption: 'APS 2025' },
    { src: '/images/noKings.jpg', caption: '2025' },
    { src: '/images/noKings2.jpg', caption: '' },
    { src: '/images/noKings3.jpg', caption: '' },
    { src: '/images/noKings4.jpg', caption: '' },
    { src: '/images/greenMile2.jpg', caption: 'Green Mile' },
  ];

  const openLightbox  = (img) => { setActive(img); setOpen(true); };
  const closeLightbox = () => setOpen(false);

  return (
    <div className="gallery-page chicago-gallery">
      {/* Show back button only when not viewing image */}
      {!open && <BackButton />}

      <h1>Chicago</h1>

      <div className="image-grid">
        {images.map((img, i) => (
          <div className="image-item" key={i}>
            <img
              src={img.src}
              alt={img.caption || `Chicago image ${i + 1}`}
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
