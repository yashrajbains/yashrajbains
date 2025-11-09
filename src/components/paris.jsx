<<<<<<< HEAD
// src/components/paris.jsx
import React, { useState } from 'react';
import BackButton from './BackButton';
import Lightbox from './Lightbox';
import '../App.css';

export default function Paris() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const images = [
    { src: '/images/eiffelTower.jpg', caption: 'Uhhh yea...' },
    { src: '/images/paris1.jpg', caption: '' },
    { src: '/images/paris2.jpg', caption: '' },
    { src: '/images/paris3.jpg', caption: '' },
    { src: '/images/paris4.jpg', caption: '' },
    { src: '/images/paris5.jpg', caption: '' },
    { src: '/images/paris6.jpg', caption: '' },
    // add more as needed
  ];

  const openLightbox  = (img) => { setActive(img); setOpen(true); };
  const closeLightbox = () => setOpen(false);

  return (
    <div className="gallery-page paris-gallery">
      {/* Hide back button while viewing lightbox */}
      {!open && <BackButton />}

      <h1>Paris 2022</h1>

      <div className="image-grid">
        {images.map((img, i) => (
          <div className="image-item" key={i}>
            <img
              src={img.src}
              alt={img.caption || `Paris photo ${i + 1}`}
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

function Paris() {
    const navigate = useNavigate();

    const images = [
        {
            src: '/images/eiffelTower.jpg',
            caption: "Uhhh yea...",
        },
        {
            src: '/images/paris1.jpg',
            caption: "",
        },
        {
            src: '/images/paris2.jpg',
            caption: "",
        },
        {
            src: '/images/paris3.jpg',
            caption: "",
        },
        {
            src: '/images/paris4.jpg',
            caption: "",
        },
        {
            src: '/images/paris5.jpg',
            caption: "",
        },
        {
            src: '/images/paris6.jpg',
            caption: "",
        },
        // Add more images and captions as needed
    ];

    const viewImage = (image) => {
        navigate('/image-view', { state: image });
    };

    return (
        <div className="paris-gallery gallery-page" style={{ paddingTop: '800px' }}>
            <BackButton />
            <h1>Paris 2022</h1>
            <div className="image-grid">
                {images.map((image, index) => (
                    <div className="image-item" key={index} onClick={() => viewImage(image)}>
                        <img src={image.src} alt={`Paris Photo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Paris;
>>>>>>> b3f0d64985ac9757ec8c2c339d41d72178af4ea6
