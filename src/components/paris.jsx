import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton.jsx';

function Paris() {
    const navigate = useNavigate();

    const images = [
        {
            src: '/images/eiffelTower.jpg',
            caption: "Uhhh yea...",
        },
        {
            src: '/images/paris1.jpg',
            caption: ".",
        },
        {
            src: '/images/paris2.jpg',
            caption: "",
        },
        {
            src: '/images/paris3.jpg',
            caption: "",
        },
        {
            src: '/images/paris4.jpg',
            caption: "",
        },
        {
            src: '/images/paris5.jpg',
            caption: "",
        },
        {
            src: '/images/paris6.jpg',
            caption: "",
        },
        // Add more images and captions as needed
    ];

    const viewImage = (image) => {
        navigate('/image-view', { state: image });
    };

    return (
        <div className="paris-gallery gallery-page">
            <BackButton />
            <h1>Paris 2022</h1>
            <div className="image-grid">
                {images.map((image, index) => (
                    <div className="image-item" key={index} onClick={() => viewImage(image)}>
                        <img src={image.src} alt={`Paris Photo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Paris;
