import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton.jsx';

function Paris() {
    const navigate = useNavigate();

    const images = [
        {
            src: '/images/eiffelTower.jpg',
            caption: "Uhhh yea... Unfortunately I did take a picture of the Eiffel Tower. But as " +
                "always, I'm always...",
        },
        // Add more images and captions as needed
    ];

    const viewImage = (image) => {
        navigate('/image-view', { state: image });
    };

    return (
        <div className="paris-gallery">
            <BackButton />
            <h1>Spring 2022: A (relatively) spontaneous trip to Paris with my friend...</h1>
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
