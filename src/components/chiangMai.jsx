import React, { useState } from 'react';
import BackButton from './BackButton';
import Lightbox from './Lightbox';
import '../App.css';

export default function ChiangMai() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const images = [
    { src: '/images/chiang1.jpg', caption: '' },
    { src: '/images/chiang2.jpg', caption: 'Travel partnerrr' },
    { src: '/images/chiang3.jpg', caption: 'Everywhere I go' },
    { src: '/images/chiang4.jpg', caption: 'Bar hopping with Scoopy was one of the highlights of this trip. I will but won\'t recommend getting viciously inebreated and riding around Chiang Mai...' },
    { src: '/images/chiang5.jpg', caption: 'It\'s hard to find ethical elephant experiences in Chiang Mai, though Jack\'s homestead ~2 hours West of the Old City is a great way to do it.' },
    { src: '/images/chiang6.jpg', caption: 'I burned too much film on this trip, losing many photos of Hong Kong and some of Thailand. Though in this case it works. There\'s some samsaric message here...' },
    { src: '/images/chiang7.jpg', caption: '' },
    { src: '/images/chiang8.jpg', caption: 'Chicken skewerzzzz' },
    { src: '/images/khaosoi.jpg', caption: 'We could not stop coming here. Life changing khao soi.' },
    { src: '/images/chiang9.jpg', caption: '' }
  ];

  const openLightbox = (img) => {
    setActive(img);
    setOpen(true);
  };

  const closeLightbox = () => setOpen(false);

  return (
    <div className="gallery-page new-location-gallery">
      {!open && <BackButton />}

      <h1>Chiang Mai</h1>

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