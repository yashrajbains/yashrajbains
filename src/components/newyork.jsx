<<<<<<< HEAD
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

      <h1>First trip to NYC, December of 2022</h1>

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
=======
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton.jsx';

function NewYork() {
    const navigate = useNavigate();

    const images = [
        {
            src: '/images/nycImage1.jpg',
            caption: '',
        },
        {
            src: '/images/nycImage2.jpg',
            caption: 'Love the pressure winds from the incoming trains. ',
        },
        {
            src: '/images/nycImage3.jpg',
            caption: 'Chinatown is absolutely overstimulating and I fucking love it. So much shady shit ' +
                'going on haha.',
        },
        {
            src: '/images/nycImage4.jpg',
            caption: 'I would die to hear these organs play',
        },
        {
            src: '/images/nycImage5.jpg',
            caption: '',
        },
        {
            src: '/images/nycImage6.jpg',
            caption: 'We stayed in an Airbnb in Brooklyn, before the great NYC Airbnb genocide. My friend asked ' +
                'the owner, Chester, if our neighborhood was generally safe... "As long as you\'re not scared of ' +
                'Black people!"',
        },
        // Add more images and captions as needed
    ];

    const viewImage = (image) => {
        navigate('/image-view', { state: image });
    };

    return (
        <div className="newYork-gallery gallery-page">
            <BackButton />
            <h1>First trip to NYC, December of 2022</h1>
            <div className="image-grid">
                {images.map((image, index) => (
                    <div className="image-item" key={index} onClick={() => viewImage(image)}>
                        <img src={image.src} alt={`New York Photo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewYork;
>>>>>>> b3f0d64985ac9757ec8c2c339d41d72178af4ea6
