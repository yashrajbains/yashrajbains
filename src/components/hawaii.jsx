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
