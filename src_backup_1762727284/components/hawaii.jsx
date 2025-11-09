// src/components/hawaii.jsx
import React, { useState } from 'react';
import BackButton from './BackButton';
import Lightbox from './Lightbox';
import '../App.css';

export default function Hawaii() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null); // { src, caption }

  const images = [
    { src: '/images/all4.jpg',        caption: '' },
    { src: '/images/selfie.jpg',      caption: '' },
    { src: '/images/theride.jpg',     caption: '' },
    { src: '/images/the2.jpg',        caption: '' },
    { src: '/images/waipio.jpg',      caption: '' },
    { src: '/images/scape.jpg',       caption: '' },
    { src: '/images/000028910030.jpg',caption: '' },
    // add more as needed
  ];

  const openLightbox  = (img) => { setActive(img); setOpen(true); };
  const closeLightbox = () => setOpen(false);

  return (
    <div className="gallery-page hawaii-gallery">
      {/* Hide the back button while the lightbox is open */}
      {!open && <BackButton />}

      <h1>Hawai‘i</h1>

      <div className="image-grid">
        {images.map((img, i) => (
          <div className="image-item" key={i}>
            <img
              src={img.src}
              alt={img.caption || `Hawaii photo ${i + 1}`}
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
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton.jsx';

function Hawaii() {
    const navigate = useNavigate();

    const images = [
        {
            src: '/images/all4.jpg',
            caption: '',
        },
        {
            src: '/images/selfie.jpg',
            caption: '',
        },
        {
            src: '/images/theride.jpg',
            caption: '',
        },
        {
            src: '/images/the2.jpg',
            caption: '',
        },
        {
            src: '/images/waipio.jpg',
            caption: '',
        },
        {
            src: '/images/scape.jpg',
            caption: '',
        },
        {
            src: '/images/000028910030.jpg',
            caption: '',
        },
        // Add more images and captions here
    ];

    const viewImage = (image) => {
        navigate('/image-view', { state: image });
    };

    return (
        <div className="hawaii-gallery gallery-page">
            <BackButton />
            <h1>Hawai‘i</h1>
            <div className="image-grid">
                {images.map((image, index) => (
                    <div className="image-item" key={index} onClick={() => viewImage(image)}>
                        <img src={image.src} alt={`Hawaii Photo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hawaii;
