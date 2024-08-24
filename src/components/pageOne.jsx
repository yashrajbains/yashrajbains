import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useNavigate } from 'react-router-dom';

// Custom icon using the Stockton cover image
const stocktonIcon = new L.Icon({
    iconUrl: '/images/stocktonCover.jpg', // Path to your image
    iconSize: [40, 60], // Adjust size of the image
    iconAnchor: [20, 20], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, 0], // Point from which the popup should open relative to the iconAnchor
});

// Custom icon using the Paris cover image
const parisIcon = new L.Icon({
    iconUrl: '/images/parisCover.jpg', // Path to your image
    iconSize: [40, 60], // Adjust size of the image
    iconAnchor: [20, 20], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, 0], // Point from which the popup should open relative to the iconAnchor
});

function PageOne() {
    const navigate = useNavigate();

    return (
        <div className="App">
            <h1>YashVisualArt</h1>
            <MapContainer
                center={[37.9577, -121.2908]}  // Center on Stockton, California
                zoom={5}
                style={{ height: "50vh", width: "250%" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* Place a marker on Stockton with the custom icon */}
                <Marker
                    position={[37.9577, -121.2908]}  // Latitude and Longitude of Stockton
                    icon={stocktonIcon}
                    eventHandlers={{
                        click: () => {
                            navigate('/stockton-photos');  // Navigate to Stockton photos page on click
                        },
                    }}
                >
                </Marker>

                {/* Place a marker on Paris with the custom icon */}
                <Marker
                    position={[48.8566, 2.3522]}  // Latitude and Longitude of Paris
                    icon={parisIcon}
                    eventHandlers={{
                        click: () => {
                            navigate('/paris-photos');  // Navigate to Paris photos page on click
                        },
                    }}
                >
                </Marker>
            </MapContainer>
        </div>
    );
}

export default PageOne;
