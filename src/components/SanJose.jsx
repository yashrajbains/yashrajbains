import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton.jsx';

function SanJose() {
    const navigate = useNavigate();

    const images = [
        {
            src: '/images/sanJoseImage1.jpg',
            caption: 'asdf',
        },
        {
            src: '/images/sanJoseImage2.jpg',
            caption: 'asdf',
        },
        // Add more images and captions as needed
    ];

    const viewImage = (image) => {
        navigate('/image-view', { state: image });
    };

    return (
        <div className="sanjose-gallery">
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
