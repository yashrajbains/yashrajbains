<<<<<<< HEAD
import React, { useState } from 'react';
import BackButton from './BackButton';
import Lightbox from './Lightbox';
import '../App.css';

export default function Chicago() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const images = [
    { src: '/images/chicagoImage1.jpg', caption: 'My Mom and I pose for an image at the Cloud Gate' },
    { src: '/images/chicagoImage3.jpg', caption: '' },
    { src: '/images/cloudGate2025.jpg', caption: '' },
    { src: '/images/noKings.jpg', caption: '' },
    { src: '/images/noKings2.jpg', caption: '' },
    { src: '/images/noKings3.jpg', caption: '' },
    { src: '/images/noKings4.jpg', caption: '' },
    { src: '/images/greenMile2.jpg', caption: '' },
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
=======
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton.jsx';

function Chicago() {
    const navigate = useNavigate();

    const images = [
        {
            src: '/images/chicagoImage1.jpg', // Replace with actual image path
            caption: 'My Mom and I pose for an image at, of course, THE BEAN. ',
        },
        {
            src: '/images/chicagoImage2.jpg', // Replace with actual image path
            caption: '',
        },
        {
            src: '/images/chicagoImage3.jpg', // Replace with actual image path
            caption: 'Trump tower. Chicago is so beautiful, was only there for 12 hours. Need to make it back.',
        },
        // Add more images as needed
    ];

    const viewImage = (image) => {
        navigate('/image-view', { state: image });
    };

    return (
        <div className="chicago-gallery gallery-page">
            <BackButton />
            <h1>On the way back from Toronto, I strongly encouraged my Mom and I to make a
            |very important| stop in Chicago...</h1>
            <div className="image-grid">
                {images.map((image, index) => (
                    <div className="image-item" key={index} onClick={() => viewImage(image)}>
                        <img src={image.src} alt={`Chicago Photo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Chicago;
>>>>>>> b3f0d64985ac9757ec8c2c339d41d72178af4ea6
