<<<<<<< HEAD
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
=======
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton.jsx';

function MexicoCity() {
    const navigate = useNavigate();

    const images = [
        {
            src: '/images/cathedral.jpg',
            caption: '',
        },
        {
            src: '/images/cathedralFlag.jpg',
            caption: '',
        },
        {
            src: '/images/chinatown.jpg',
            caption: '',
        },
        {
            src: '/images/street.jpg',
            caption: '',
        },
        // Add more images with `src` and `caption`
    ];

    const viewImage = (image) => {
        navigate('/image-view', { state: image });
    };

    return (
        <div className="mexico-gallery gallery-page">
            <BackButton />
            <h1>Mexico City 2025</h1>
            <div className="image-grid">
                {images.map((image, index) => (
                    <div className="image-item" key={index} onClick={() => viewImage(image)}>
                        <img src={image.src} alt={`Mexico Photo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MexicoCity;
>>>>>>> b3f0d64985ac9757ec8c2c339d41d72178af4ea6
