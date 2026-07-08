import React, { useState } from 'react';
import BackButton from './BackButton';
import Lightbox from './Lightbox';
import '../App.css';

export default function HongKong() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const images = [
    { src: '/images/hk10.jpg', caption: '' },
    { src: '/images/hk11.jpg', caption: '' },
    { src: '/images/hk12.jpg', caption: '' },
    { src: '/images/hk13.jpg', caption: '' },
    { src: '/images/hk1.jpg', caption: '' },
    { src: '/images/hk2.jpg', caption: 'Never experienced rain, thunder, and lightning like I did in Hong Kong.' },
    { src: '/images/hk3.jpg', caption: 'Kowloon Walled City Park. Wish I could have experienced the city during its peak in the 80s-90s.' },
    { src: '/images/hk4.jpg', caption: 'One of me loading film at the base of Victoria Peak.' },
    { src: '/images/hk5.jpg', caption: 'One of me at Victoria Peak.' },
    { src: '/images/hk6.jpg', caption: '' },
    { src: '/images/hk7.jpg', caption: '' },
    { src: '/images/hk8.jpg', caption: 'Ms. Grumpy' },
    { src: '/images/hk9.jpg', caption: '' },
    
  ];

  const openLightbox = (img) => {
    setActive(img);
    setOpen(true);
  };

  const closeLightbox = () => setOpen(false);

  return (
    <div className="gallery-page new-location-gallery">
      {!open && <BackButton />}

      <h1>Hong Kong</h1>

      <div className="image-grid">
        {images.map((img, i) => (
          <div className="image-item" key={i}>
            <img
              src={img.src}
              alt={img.caption || `New Location image ${i + 1}`}
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