import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton.jsx';

function Atlanta() {
    const navigate = useNavigate();

    const images = [
        {
            src: '/images/atlantaImage1.jpg',
            caption: 'Spencer \'Handtastic\' Lancaster (2021)',
        },
        {
            src: '/images/stark.jpg',
            caption: 'Post Covid Atlanta',
        },
        {
            src: '/images/church.jpg',
            caption: '',
        },
        {
            src: '/images/church2.jpg',
            caption: '',
        },
        {
            src: '/images/---_00057.jpg',
            caption: '',
        },
        // Add more images and captions as needed
    ];

    const viewImage = (image) => {
        navigate('/image-view', { state: image });
    };

    return (
        <div className="atlanta-gallery gallery-page">
            <BackButton />
            <h1>Atlanta 2021</h1>
            <div className="image-grid">
                {images.map((image, index) => (
                    <div className="image-item" key={index} onClick={() => viewImage(image)}>
                        <img src={image.src} alt={`Atlanta Photo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Atlanta;
