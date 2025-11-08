import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css';

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <div className="back-button" onClick={() => navigate(-1)} title="Back">
      <img src="/images/backRed.png" alt="Back" />
    </div>
  );
}
