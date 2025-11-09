// src/components/sanJose.jsx
import React, { useState } from 'react';
import BackButton from './BackButton';
import Lightbox from './Lightbox';
import '../App.css';

export default function SanJose() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const images = [
    { src: '/images/cdm1.jpg', caption: 'Cinco de Mayo 2022 (1)' },
    { src: '/images/cdm2.jpg', caption: 'Cinco de Mayo 2022 (2)' },
    { src: '/images/goodKarma2.jpg', caption: 'Good Karma' },
    { src: '/images/oneofMe.jpg', caption: 'One of me.' },
    { src: '/images/tomfr.jpg', caption: 'Thomas Tichy (2025)' },
    { src: '/images/sanJoseZ.jpg', caption: '' },
    { src: '/images/sanJoseZ2.jpg', caption: 'Thomas Tichy (2025)' },
    { src: '/images/AndrewYbarra.jpg', caption: 'Andrew Ybarra (2025)' },
    // add more as needed
  ];

  const openLightbox  = (img) => { setActive(img); setOpen(true); };
  const closeLightbox = () => setOpen(false);

  return (
    <div className="gallery-page sanjose-gallery">
      {/* Hide back button while viewing the lightbox */}
      {!open && <BackButton />}

      <h1>San Jose</h1>

      <div className="image-grid">
        {images.map((img, i) => (
          <div className="image-item" key={i}>
            <img
              src={img.src}
              alt={img.caption || `San Jose photo ${i + 1}`}
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
import '../homePage.css'

function SanJose() {
    const navigate = useNavigate();

    const images = [
        {
            src: '/images/cdm1.jpg',
            caption: 'Cinco de Mayo 2022 (1)',
        },
        {
            src: '/images/cdm2.jpg',
            caption: 'Cinco de Mayo 2022 (2)',
        },
        {
            src: '/images/goodkarma.jpg',
            caption: 'Good Karma, my favorite place in SJ.',
        },
        {
            src: '/images/oneofMe.jpg',
            caption: 'One of me.',
        },
        {
            src: '/images/tomfr.jpg',
            caption: 'Thomas Tichy (2025)'
        },
        // Add more images and captions as needed
    ];

    const viewImage = (image) => {
        navigate('/image-view', { state: image });
    };

    return (
        <div className="sanjose-gallery gallery-page">
            <BackButton />
            <h1>San Jose</h1>
            <div className="image-grid">
                {images.map((image, index) => (
                    <div className="image-item" key={index} onClick={() => viewImage(image)}>
                        <img src={image.src} alt={`San Jose Photo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SanJose;
