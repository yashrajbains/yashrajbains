// src/components/stockton.jsx
import React, { useState } from 'react';
import BackButton from './BackButton';
import Lightbox from './Lightbox';
import '../App.css';

export default function Stockton() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const images = [
    { src: '/images/impalaGarage.jpg', caption: '' },
    { src: '/images/nic.jpg',          caption: 'Nic for P.M. (2021)' },
    { src: '/images/rubin.jpg',        caption: 'Rubin (2021)' },
    // { src: '/images/polaroid.png',
    //   caption: 'My sister took this polaroid of me and an old friend in front of my 5th Stockton home. 83 Eldorado was hiiieeeeeemmm.' },
  ];

  const openLightbox  = (img) => { setActive(img); setOpen(true); };
  const closeLightbox = () => setOpen(false);

  return (
    <div className="gallery-page stockton-gallery">
      {/* Hide back button while viewing image */}
      {!open && <BackButton />}

      <h1>Some pictures from where I grew up. The best of which are Missing.</h1>

      <div className="image-grid">
        {images.map((img, i) => (
          <div className="image-item" key={i}>
            <img
              src={img.src}
              alt={img.caption || `Stockton photo ${i + 1}`}
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
