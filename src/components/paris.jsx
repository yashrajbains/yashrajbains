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

function Paris() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedCaption, setSelectedCaption] = useState('');

    const images = [
        {
            src: '/images/eiffelTower.jpg',
            caption: 'Yea... unfortunately I took a picture of the Eiffel Tower. Though, as always, I\'m always,'
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
        <div className="paris-gallery">
            <h1>Some pictures from Paris, the City of Light.</h1>
            <div className="image-grid">
                {images.map((image, index) => (
                    <div className="image-item" key={index} onClick={() => openModal(image)}>
                        <img src={image.src} alt={`Paris Photo ${index + 1}`} />
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

export default Paris;
