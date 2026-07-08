import React from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useNavigate } from 'react-router-dom';
import BackButton from "./BackButton.jsx";

// 🧭 Marker icons
const markerIcon = (imagePath) =>
    new L.Icon({
        iconUrl: imagePath,
        iconSize: [40, 60],
        iconAnchor: [20, 20],
        popupAnchor: [0, 0],
    });

const stocktonIcon = markerIcon('/images/stocktonCover.jpg');
const parisIcon = markerIcon('/images/parisCover.jpg');
const atlantaIcon = markerIcon('/images/atlantaCover.jpg');
const chicagoIcon = markerIcon('/images/chicagoCover.jpg');
const newYorkIcon = markerIcon('/images/nycCover.jpg');
const sanJoseIcon = markerIcon('/images/sanJoseCover.jpg');
const mexicoIcon = markerIcon('/images/mexicoCover.jpg');
const hawaiiIcon = markerIcon('/images/hawaiiCover.jpg');
const bangkokIcon = markerIcon('/images/bangkokCover.jpg');
const chiangIcon = markerIcon('/images/chiangCover.jpg');
const hkIcon = markerIcon('/images/hkCover.jpg');

// 💾 Saves map position whenever user moves/zooms the map
function SaveMapPosition() {
    const map = useMapEvents({
        moveend: () => {
            const center = map.getCenter();
            const zoom = map.getZoom();

            sessionStorage.setItem(
                'mapPosition',
                JSON.stringify({
                    lat: center.lat,
                    lng: center.lng,
                    zoom: zoom,
                })
            );
        },
    });

    return null;
}

function PageOne() {
    const navigate = useNavigate();

    const savedPosition = JSON.parse(sessionStorage.getItem('mapPosition'));

    const mapCenter = savedPosition
        ? [savedPosition.lat, savedPosition.lng]
        : [37.9577, -121.2908];

    const mapZoom = savedPosition
        ? savedPosition.zoom
        : 5;

    // 📍 All marker data
    const locations = [
        {
            coords: [37.9577, -121.2908],
            icon: stocktonIcon,
            path: '/stockton-photos',
        },
        {
            coords: [48.8566, 2.3522],
            icon: parisIcon,
            path: '/paris-photos',
        },
        {
            coords: [33.7490, -84.3880],
            icon: atlantaIcon,
            path: '/atlanta-photos',
        },
        {
            coords: [41.8781, -87.6298],
            icon: chicagoIcon,
            path: '/chicago-photos',
        },
        {
            coords: [40.7128, -74.0060],
            icon: newYorkIcon,
            path: '/new-york-photos',
        },
        {
            coords: [37.3387, -121.8853],
            icon: sanJoseIcon,
            path: '/SanJose',
        },
        {
            coords: [19.4326, -99.1332],
            icon: mexicoIcon,
            path: '/mexicoCity',
        },
        {
            coords: [19.8206, -155.4681],
            icon: hawaiiIcon,
            path: '/hawaii',
        },
        {
            coords: [13.7563, 100.5018],
            icon: bangkokIcon,
            path: '/bangkok',
        },
        {
            coords: [18.7953, 98.9986],
            icon: chiangIcon,
            path: '/chiangMai',
        },
        {
            coords: [22.3193, 114.1694],
            icon: hkIcon,
            path: '/hongKong',
        },
    ];

    return (
        <div className="App">
            <BackButton />
            
            <MapContainer
    center={mapCenter}
    zoom={mapZoom}
    minZoom={2}
    maxBounds={[
        [-85, -180],
        [85, 180],
    ]}
    maxBoundsViscosity={1.0}
    worldCopyJump={false}
    style={{ height: '50vh', width: '100%' }}
>
    <SaveMapPosition />

    <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        noWrap={true}
    />

    {/* 🗺️ Render all markers */}
    {locations.map((location, index) => (
        <Marker
            key={index}
            position={location.coords}
            icon={location.icon}
            interactive={true}
            keyboard={false}
            eventHandlers={{
                click: (e) => {
                    e.originalEvent.preventDefault();
                    navigate(location.path);
                },
            }}
        />
    ))}
</MapContainer>
        </div>
    );
}

export default PageOne;