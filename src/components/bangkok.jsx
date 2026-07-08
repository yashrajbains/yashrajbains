import React, { useState } from 'react';
import BackButton from './BackButton';
import Lightbox from './Lightbox';
import '../App.css';

export default function Bangkok() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const images = [
    { src: '/images/bangkok1.jpg', caption: 'Wat Arun' },
    { src: '/images/bangkok2.jpg', caption: 'Wat Arun (2)' },
    { src: '/images/bangkok23.jpg', caption: 'Wat Arun (3)' },
    { src: '/images/bangkok4.jpg', caption: 'One of me in Wang Lang Market. The pad kaprao here changed my life.' },
    { src: '/images/bangkok5.jpg', caption: 'Wang Lang Market (2)' },
    { src: '/images/bangkok6.jpg', caption: 'Wat Paknam Bhasicharoen' },
    { src: '/images/bangkok7.jpg', caption: 'Wat Paknam Bhasicharoen (2)' },
    { src: '/images/tuktuk.jpg', caption: 'I think I was made for the tuk tuk life...' },
    { src: '/images/bangkok8.jpg', caption: 'Chinatown' },
    { src: '/images/bangkok22.jpg', caption: 'Chinatown (2)' },
    { src: '/images/bangkok9.jpg', caption: 'Soi Cowboy...' },
    { src: '/images/bangkok10.jpg', caption: 'Wat Pho - Reclining Bhudda' },
    { src: '/images/bangkok11.jpg', caption: 'Wat Pho - Reclining Bhudda (2)' },
    { src: '/images/bangkok12.jpg', caption: 'Bang Rak District ' },
    { src: '/images/bangkok13.jpg', caption: '' },
    { src: '/images/bangkok14.jpg', caption: '' },
    { src: '/images/bangkok15.jpg', caption: '' },
    { src: '/images/bangkok16.jpg', caption: '' },
    { src: '/images/bangkok17.jpg', caption: '' },
    { src: '/images/bangkok18.jpg', caption: '' },
    { src: '/images/bangkok19.jpg', caption: '' },
    { src: '/images/bangkok20.jpg', caption: 'One of me waiting for a water taxi.' },
    { src: '/images/bangkok21.jpg', caption: '' },
    { src: '/images/bangkok3.jpg', caption: '' },
    { src: '/images/bangkok24.jpg', caption: '' },
    { src: '/images/bangkok25.jpg', caption: 'So we sat down at some Michelin starred restaurant and quickly determined it would not satisfy our newly awakened desire for spice, sour, bitter, savory, and all of the above. Before the waitress returned to our table we quickly left and decided to take our business to: Alley Man.' },
];

  const openLightbox = (img) => {
    setActive(img);
    setOpen(true);
  };

  const closeLightbox = () => setOpen(false);

  return (
    <div className="gallery-page new-location-gallery">
      {!open && <BackButton />}

      <h1>Bangkok</h1>

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