import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton.jsx';

function NewYork() {
    const navigate = useNavigate();

    const images = [
        {
            src: '/images/nycImage1.jpg',
            caption: 'Maybe get the tourist ass photos out of the way first.',
        },
        {
            src: '/images/nycImage2.jpg',
            caption: 'I\'m no better than the average NYC tourist; the subway was mesmerizing. ' +
                'Love the pressure winds from the incoming trains. ',
        },
        {
            src: '/images/nycImage3.jpg',
            caption: 'Chinatown is absolutely overstimulating and I fucking love it. So much shady shit ' +
                'going on haha.',
        },
        {
            src: '/images/nycImage4.jpg',
            caption: 'A dope spooky photo of St. Patrick\'s. I felt quite insensitive going inside though it ' +
                'was extremely beautiful. I would die to hear those organs play',
        },
        {
            src: '/images/nycImage5.jpg',
            caption: 'My friend Dan visited around a year later and took a similar picture on this same exact street. ' +
                'Great minds do think alike.',
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
        <div className="newYork-gallery">
            <BackButton />
            <h1>My first NYC trip (2022). I hope it's not long before I live here. Just give
            me an excuse!!!</h1>
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
