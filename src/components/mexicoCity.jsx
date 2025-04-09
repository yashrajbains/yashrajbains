import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton.jsx';

function MexicoCity() {
    const navigate = useNavigate();

    const images = [
        {
            src: '/images/cathedral.jpg',
            caption: '',
        },
        {
            src: '/images/cathedralFlag.jpg',
            caption: '',
        },
        {
            src: '/images/chinatown.jpg',
            caption: '',
        },
        {
            src: '/images/street.jpg',
            caption: '',
        },
        // Add more images with `src` and `caption`
    ];

    const viewImage = (image) => {
        navigate('/image-view', { state: image });
    };

    return (
        <div className="mexico-gallery">
            <BackButton />
            <h1>Mexico City 2025</h1>
            <div className="image-grid">
                {images.map((image, index) => (
                    <div className="image-item" key={index} onClick={() => viewImage(image)}>
                        <img src={image.src} alt={`Mexico Photo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MexicoCity;
