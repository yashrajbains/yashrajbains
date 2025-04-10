import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton.jsx';

function NewYork() {
    const navigate = useNavigate();

    const images = [
        {
            src: '/images/nycImage1.jpg',
            caption: '',
        },
        {
            src: '/images/nycImage2.jpg',
            caption: 'Love the pressure winds from the incoming trains. ',
        },
        {
            src: '/images/nycImage3.jpg',
            caption: 'Chinatown is absolutely overstimulating and I fucking love it. So much shady shit ' +
                'going on haha.',
        },
        {
            src: '/images/nycImage4.jpg',
            caption: 'I would die to hear these organs play',
        },
        {
            src: '/images/nycImage5.jpg',
            caption: '',
        },
        {
            src: '/images/nycImage6.jpg',
            caption: 'We stayed in an Airbnb in Brooklyn, before the great NYC Airbnb genocide. My friend asked ' +
                'the owner, Chester, if our neighborhood was generally safe... "As long as you\'re not scared of ' +
                'Black people!"',
        },
        // Add more images and captions as needed
    ];

    const viewImage = (image) => {
        navigate('/image-view', { state: image });
    };

    return (
        <div className="newYork-gallery gallery-page">
            <BackButton />
            <h1>First trip to NYC, December of 2022</h1>
            <div className="image-grid">
                {images.map((image, index) => (
                    <div className="image-item" key={index} onClick={() => viewImage(image)}>
                        <img src={image.src} alt={`New York Photo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewYork;
