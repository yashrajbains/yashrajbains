import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useNavigate } from 'react-router-dom';
import BackButton from "./BackButton.jsx";

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

const atlantaIcon = new L.Icon({
    iconUrl: '/images/atlantaCover.jpg', // Path to your image
    iconSize: [40, 60],
    iconAnchor: [20, 20],
    popupAnchor: [0, 0],
});

const chicagoIcon = new L.Icon({
    iconUrl: '/images/chicagoCover.jpg', // Path to your image
    iconSize: [40, 60], // Adjust size of the image
    iconAnchor: [20, 20], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, 0], // Point from which the popup should open relative to the iconAnchor
});

const newYorkIcon = new L.Icon({
    iconUrl: '/images/nycCover.jpg', // Path to your New York cover image
    iconSize: [40, 60],
    iconAnchor: [20, 20],
    popupAnchor: [0, 0],
});

const sanJoseIcon = new L.Icon({
    iconUrl: '/images/sanJoseCover.jpg', // Path to your San Jose cover image
    iconSize: [40, 60],
    iconAnchor: [20, 20],
    popupAnchor: [0, 0],
});



function PageOne() {
    const navigate = useNavigate();

    return (
        <div className="App">
            <BackButton/>
            <img src="/images/YashVisualArtHeaderRed.png" alt="Yash Visual Art" style={{width: '40%', height: 'auto', marginBottom: '20px', position: 'relative', top: '-20px'}}/>
            <MapContainer
                center={[37.9577, -121.2908]}  // Center on Stockton, California
                zoom={5}
                style={{height: "50vh", width: "100%"}}
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

                {/* Place a marker on Atlanta with the custom icon */}
                <Marker
                    position={[33.7490, -84.3880]}  // Latitude and Longitude of Atlanta
                    icon={atlantaIcon}
                    eventHandlers={{
                        click: () => {
                            navigate('/atlanta-photos');  // Navigate to Atlanta photos page on click
                        },
                    }}
                >
                </Marker>

                {/* Place a marker on Chicago with the custom icon */}
                <Marker
                    position={[41.8781, -87.6298]}  // Latitude and Longitude of Chicago
                    icon={chicagoIcon}
                    eventHandlers={{
                        click: () => {
                            navigate('/chicago-photos');  // Navigate to Chicago photos page on click
                        },
                    }}
                >
                </Marker>

                <Marker
                    position={[40.7128, -74.0060]}  // Latitude and Longitude of New York City
                    icon={newYorkIcon}
                    eventHandlers={{
                        click: () => {
                            navigate('/new-york-photos');  // Navigate to New York photos page on click
                        },
                    }}
                >
                </Marker>

                <Marker
                    position={[37.3387, -121.8853]}  // Latitude and Longitude of San Jose
                    icon={sanJoseIcon}
                    eventHandlers={{
                        click: () => {
                            navigate('/SanJose');  // Navigate to San Jose photos page on click
                        },
                    }}
                >
                </Marker>


            </MapContainer>
        </div>
    );
}

export default PageOne;
