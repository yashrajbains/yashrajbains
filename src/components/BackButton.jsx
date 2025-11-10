// src/components/BackButton.jsx
import { useNavigate } from 'react-router-dom';
import backIcon from '../assets/backRed.png';   // ← import, lets Vite bundle it
import './BackButton.css';

export default function BackButton({ fallback = '/home' }) {
  const nav = useNavigate();
  const go = () => (history.length > 1 ? nav(-1) : nav(fallback));

  return (
    <button className="back-btn" onClick={go} aria-label="Go back">
      <img className="back-icon" src={backIcon} alt="" />
    </button>
  );
}
