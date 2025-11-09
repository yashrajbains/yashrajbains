import React from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import './BackButton.css';

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <div className="back-button" onClick={() => navigate(-1)} title="Back">
      <img src="/images/backRed.png" alt="Back" />
    </div>
  );
}
=======
import './BackButton.css'; // We'll create this CSS file next

function BackButton() {
    const navigate = useNavigate();

    return (
        <div className="back-button" onClick={() => navigate(-1)}>
            <img src="/images/backRed.png" alt="Back" />
        </div>
    );
}

export default BackButton;
>>>>>>> b3f0d64985ac9757ec8c2c339d41d72178af4ea6
