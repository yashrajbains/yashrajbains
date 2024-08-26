import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useNavigate } from 'react-router-dom';
import BackButton from "./BackButton.jsx";

// Custom icons
const stocktonIcon = new L.Icon({
    iconUrl: '/images/stocktonCover.jpg',
    iconSize: [40, 60],
    iconAnchor: [20, 20],
    popupAnchor: [0, 0],
});

const parisIcon = new L.Icon({
    iconUrl: '/images/parisCover.jpg',
    iconSize: [40, 60],
    iconAnchor: [20, 20],
    popupAnchor: [0, 0],
});

const atlantaIcon = new L.Icon({
    iconUrl: '/images/atlantaCover.jpg',
    iconSize: [40, 60],
    iconAnchor: [20, 20],
    popupAnchor: [0, 0],
});

const chicagoIcon = new L.Icon({
    iconUrl: '/images/chicagoCover.jpg',
    iconSize: [40, 60],
    iconAnchor: [20, 20],
    popupAnchor: [0, 0],
});

const newYorkIcon = new L.Icon({
    iconUrl: '/images/nycCover.jpg',
    iconSize: [40, 60],
    iconAnchor: [20, 20],
    popupAnchor: [0, 0],
});

function PageOne() {
    const navigate = useNavigate();

    return (
        <div className="App">
            <BackButton />
            <img src="/images/YashVisualArtHeaderRed.png" alt="Yash Visual Art" style={{width: '40%', height: 'auto', marginBottom: '20px', position: 'relative', top: '-20px'}}/>
            <MapContainer
                center={[37.9577, -121.2908]}  // Center on Stockton, California
                zoom={5}
                style={{ height: "50vh", width: "100%" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* Stockton Marker */}
                <Marker
                    position={[37.9577, -121.2908]}
                    icon={stocktonIcon}
                    eventHandlers={{
                        click: (e) => {
                            e.originalEvent.stopPropagation();
                            navigate('/stockton-photos');
                        },
                    }}
                />

                {/* Paris Marker */}
                <Marker
                    position={[48.8566, 2.3522]}
                    icon={parisIcon}
                    eventHandlers={{
                        click: (e) => {
                            e.originalEvent.stopPropagation();
                            navigate('/paris-photos');
                        },
                    }}
                />

                {/* Atlanta Marker */}
                <Marker
                    position={[33.7490, -84.3880]}
                    icon={atlantaIcon}
                    eventHandlers={{
                        click: (e) => {
                            e.originalEvent.stopPropagation();
                            navigate('/atlanta-photos');
                        },
                    }}
                />

                {/* Chicago Marker */}
                <Marker
                    position={[41.8781, -87.6298]}
                    icon={chicagoIcon}
                    eventHandlers={{
                        click: (e) => {
                            e.originalEvent.stopPropagation();
                            navigate('/chicago-photos');
                        },
                    }}
                />

                {/* New York Marker */}
                <Marker
                    position={[40.7128, -74.0060]}
                    icon={newYorkIcon}
                    eventHandlers={{
                        click: (e) => {
                            e.originalEvent.stopPropagation();
                            navigate('/new-york-photos');
                        },
                    }}
                />
            </MapContainer>
        </div>
    );
}

export default PageOne;
