import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton.jsx';

function Atlanta() {
    const navigate = useNavigate();

    const images = [
        {
            src: '/images/atlantaImage1.jpg',
            caption: 'This is an image taken in Atlanta. Describe the context or story behind this photo here.',
        },
        {
            src: '/images/atlantaImage2.jpg',
            caption: 'Another image from Atlanta with a brief caption explaining the significance or memory.',
        },
        // Add more images and captions as needed
    ];

    const viewImage = (image) => {
        navigate('/image-view', { state: image });
    };

    return (
        <div className="atlanta-gallery">
            <BackButton />
            <h1>Yes I really did fly to Atlanta to witness Donda LP2...</h1>
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
