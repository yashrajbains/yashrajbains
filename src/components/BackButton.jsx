// src/components/BackButton.jsx
import { useLocation, useNavigate } from 'react-router-dom';
import backIcon from '../assets/backRed.png';
import './BackButton.css';

export default function BackButton({ fallback = '/home' }) {
  const nav = useNavigate();
  const location = useLocation();

  const locationPages = [
    '/stockton-photos',
    '/paris-photos',
    '/atlanta-photos',
    '/chicago-photos',
    '/new-york-photos',
    '/SanJose',
    '/mexicoCity',
    '/hawaii',
    '/bangkok',
    '/chiangMai',
    '/hongKong',
  ];

  const go = () => {
    const isLocationPage = locationPages.includes(location.pathname);
    const wasLoadedDirectly = location.key === 'default';

    if (isLocationPage && wasLoadedDirectly) {
      // Direct/shared link or refreshed location page:
      // go to the map instead of leaving the website.
      nav('/page-one', { replace: true });
    } else {
      // Preserve the original behavior everywhere else.
      nav(-1);
    }
  };

  return (
    <button className="back-btn" onClick={go} aria-label="Go back">
      <img className="back-icon" src={backIcon} alt="" />
    </button>
  );
}