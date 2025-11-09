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
=======
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton.jsx';

function Stockton() {
    const navigate = useNavigate();

    const images = [
        {
            src: '/images/impalaGarage.jpg',
            caption: 'I had just purchased my first camera from Ulmer Photo on Pacific Ave. Minolta SRT 101, ' +
                'previously owned by Benjamin Reddish. Unfortunately, the shutter had a problem of getting stuck and I ' +
                'returned the camera to Tim after a pitiful attempt to repair it. Looking back, I should have kept' +
                ' the camera... Anyways, this picture is one of the two pictures I took with that ' +
                'camera, on top of the parking garage nearest ' +
                'to the Regal movie theater in downtown Stockton. "That one garage" And yes, that was my car at the time.',
        },
        {
            src: '/images/nic.jpg',
            caption: 'My good friend Nic poses as a model for our soon-to-drop clothing brand: P.M. (2021)',
        },
        {
            src: '/images/rubin.jpg',
            caption: 'Rubin (2021)'
        },
        // {
        //     src: '/images/polaroid.png',
        //     caption: 'My sister took this polaroid of me and an old friend in front of my 5th Stockton home. ' +
        //         '83 Eldorado was hiiieeeeeemmm. '
        // },
        // Add more images and captions as needed
    ];

    const viewImage = (image) => {
        navigate('/image-view', { state: image });
    };

    return (
        <div className="stockton-gallery gallery-page">
            <BackButton />
            <h1>Some pictures from where I grew up. The best of which are Missing.</h1>
            <div className="image-grid">
                {images.map((image, index) => (
                    <div className="image-item" key={index} onClick={() => viewImage(image)}>
                        <img src={image.src} alt={`Stockton Photo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}
>>>>>>> b3f0d64985ac9757ec8c2c339d41d72178af4ea6

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
