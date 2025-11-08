import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton.jsx';

function Stockton() {
    const navigate = useNavigate();

    const images = [
        {
            src: '/images/impalaGarage.jpg',
            caption: '',
        },
        {
            src: '/images/nic.jpg',
            caption: 'Nic for P.M. (2021)',
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

export default Stockton;
