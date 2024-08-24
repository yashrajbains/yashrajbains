import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function PageOne() {
    // Path to your image (make sure the image is accessible within your project)
    const stocktonCoverArt = process.env.PUBLIC_URL + '/images/stocktonCover.jpg';

    return (
        <div className="App">
            <h1>YashVisualArt</h1>
            <MapContainer
                center={[37.9577, -121.2908]}  // Center on Stockton, California
                zoom={8}
                style={{ height: "50vh", width: "250%" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[37.9577, -121.2908]}>
                    <Popup>
                        <img
                            src={stocktonCoverArt}
                            alt="Stockton Cover Art"
                            style={{ width: '100px', height: '100px' }}
                        />
                        <br />
                        <a href="/stockton-photos">View Photos from Stockton</a>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default PageOne;
