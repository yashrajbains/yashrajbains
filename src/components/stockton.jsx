import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton.jsx';

function Stockton() {
    const navigate = useNavigate();

    const images = [
        {
            src: '/images/impalaGarage.jpg',
            caption: 'I had just purchased my first camera from Ulmer Photo on Pacific Ave. Minolta SRT 101, ' +
                'owned by the great Benjamin Reddish. Unfortunately, the shutter had a problem of getting stuck and I ' +
                'returned the camera to Tim after a pitiful attempt to repair it. Looking back, I should have kept' +
                ' the camera for its significance... Anyways, this picture was taken on top of the parking garage nearest ' +
                'to the Regal movie theater in downtown Stockton. "That one garage ;)" And yes, that was my car at the time.',
        },
        {
            src: '/images/nic.jpg',
            caption: 'My good friend Nic poses as a model for our soon-to-drop clothing brand: P.M. (2021)',
        },
        {
            src: '/images/rubin.jpg',
            caption: 'While doing a photoshoot for P.M., a man and his [insert word for female sig other] ' +
                'are walking their bikes past us. Rubin asks to be included in the photoshoot. To his left and right ' +
                'are other "models" in the shoot, though I was (luckily) using a lens which cropped them out of ' +
                'the photo.'
        },
        {
            src: '/images/polaroid.png',
            caption: 'My sister took this polaroid of me and an old lover in front of my 5th Stockton home. ' +
                '83 Eldorado was hiiieeeeeemmm. '
        },
        // Add more images and captions as needed
    ];

    const viewImage = (image) => {
        navigate('/image-view', { state: image });
    };

    return (
        <div className="stockton-gallery">
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
