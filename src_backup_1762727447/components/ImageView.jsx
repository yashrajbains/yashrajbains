import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BackButton from './BackButton.jsx';

function ImageView() {
    const navigate = useNavigate();
    const location = useLocation();
    const { src, caption } = location.state;  // Get the image data passed via the route

    return (
        <div className="image-view">
            <BackButton />
            <img src={src} alt="Full Size" className="full-image" />
            <p className="caption">{caption}</p>
        </div>
    );
}

export default ImageView;
