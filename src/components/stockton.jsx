import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '80vw',
        maxHeight: '80vh',
        overflow: 'auto',
        backgroundColor: '#000',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
};

Modal.setAppElement('#root');

function Stockton() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedCaption, setSelectedCaption] = useState('');

    const images = [
        {
            src: '/images/impalaGarage.jpg',
            caption: 'I had just purchased my first camera from Ulmer Photo on Pacific Ave. Minolta SRT 101, ' +
                'owned by the great Benjamin Reddish. Unfortunately, the shutter had a problem of getting stuck and I ' +
                'returned the camera to Tim after a pitiful attempt to repair it. Looking back, I should have kept' +
                ' the camera for its significance... Anyways, this picture was taken on top of the parking garage nearest ' +
                'to the Regal movie theater in downtown Stockton. "That one garage ;)"',
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
        // Add more images and captions as needed
    ];

    const openModal = (image) => {
        setSelectedImage(image.src);
        setSelectedCaption(image.caption);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImage(null);
        setSelectedCaption('');
    };

    return (
        <div className="stockton-gallery">
            <h1>Some pictures from where I grew up. The best of which are Missing.</h1>
            <div className="image-grid">
                {images.map((image, index) => (
                    <div className="image-item" key={index} onClick={() => openModal(image)}>
                        <img src={image.src} alt={`Stockton Photo ${index + 1}`} />
                    </div>
                ))}
            </div>

            {/* Modal for full-size image view */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Image Modal"
            >
                <button onClick={closeModal} style={{ float: 'right' }}>Close</button>
                {selectedImage && (
                    <>
                        <img src={selectedImage} alt="Full Size" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
                        <p>{selectedCaption}</p>
                    </>
                )}
            </Modal>
        </div>
    );
}

export default Stockton;
