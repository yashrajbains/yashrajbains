import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton.jsx';

function Chicago() {
    const navigate = useNavigate();

    const images = [
        {
            src: '/images/chicagoImage1.jpg', // Replace with actual image path
            caption: 'My Mom and I pose for an image at, of course, THE BEAN. ',
        },
        {
            src: '/images/chicagoImage2.jpg', // Replace with actual image path
            caption: 'An image from our hotel room. I remember being very disappointed at my ' +
                'photographic abilities when looking at the pictures from this trip. ',
        },
        {
            src: '/images/chicagoImage3.jpg', // Replace with actual image path
            caption: 'Trump tower. Chicago is so beautiful. Would love to live there...',
        },
        // Add more images as needed
    ];

    const viewImage = (image) => {
        navigate('/image-view', { state: image });
    };

    return (
        <div className="chicago-gallery">
            <BackButton />
            <h1>On the way back from Toronto, I strongly encouraged my Mom and I to make a
            |very important| stop in Chicago...</h1>
            <div className="image-grid">
                {images.map((image, index) => (
                    <div className="image-item" key={index} onClick={() => viewImage(image)}>
                        <img src={image.src} alt={`Chicago Photo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Chicago;
