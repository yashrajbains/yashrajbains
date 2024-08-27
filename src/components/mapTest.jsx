import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from "./BackButton.jsx";
import worldMap from '/images/worldMap.jpg'; // Replace with the path to your world map image

function MapTest() {
    const navigate = useNavigate();

    // Define the marker positions and corresponding pages
    const markers = [
        { top: '45%', left: '30%', page: '/stockton' },  // Example marker for Stockton
        { top: '48%', left: '50%', page: '/sanJose' },   // Example marker for San Jose
        // Add more markers for other locations
        // Example: { top: 'X%', left: 'Y%', page: '/yourPage' },
    ];

    return (
        <div className="map-test">
            <BackButton />
            <img src={worldMap} alt="World Map" style={{ width: '100%', height: 'auto', position: 'relative' }} />
            {markers.map((marker, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        top: marker.top,
                        left: marker.left,
                        transform: 'translate(-50%, -50%)',
                        cursor: 'pointer',
                    }}
                    onClick={() => navigate(marker.page)}
                >
                    <img src="/images/nycCover.jpg" alt="Marker" style={{ width: '40px', height: '60px' }} />
                </div>
            ))}
        </div>
    );
}

export default MapTest;
