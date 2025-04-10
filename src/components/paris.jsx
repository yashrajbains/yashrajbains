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
            src: '/images/__8_00065.jpg',
            caption: "",
        },
        {
            src: '/images/_15_00119.jpg',
            caption: "",
        },
        {
            src: '/images/_16_00016.jpg',
            caption: "",
        },
        {
            src: '/images/_18_00122.jpg',
            caption: "",
        },
        {
            src: '/images/_21_00021.jpg',
            caption: "",
        },
        {
            src: '/images/_23_00080.jpg',
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
