import React, { useState } from 'react';
import BackButton from './BackButton.jsx';
import './PageTwo.css';

import raregemsImg from '../assets/raregems.png';
import rubinImg from '../assets/rubin.png';
import rweekImg from '../assets/rweek.png';

import raregemsPDF from '../assets/Rare Gems Poster FINAL.pdf';
import rubinPDF from '../assets/RSCA 2025 - Yashraj Bains.pdf';
import rcwPDF from '../assets/RCW_final.pdf';

function PageTwo() {
    const [selectedPdf, setSelectedPdf] = useState(null);

    const handleButtonClick = (pdfPath) => {
        setSelectedPdf(pdfPath);
    };

    const closeModal = () => {
        setSelectedPdf(null);
    };

    return (
        <div className="App">
            <BackButton />

            <div className="button-grid">
                <img
                    src={raregemsImg}
                    alt="Rare Gems Poster"
                    className="pdf-button"
                    onClick={() => handleButtonClick(raregemsPDF)}
                />
                <img
                    src={rubinImg}
                    alt="Rubin Week Poster"
                    className="pdf-button"
                    onClick={() => handleButtonClick(rcwPDF)}
                />
                <img
                    src={rweekImg}
                    alt="RCW Poster"
                    className="pdf-button bottom"
                    onClick={() => handleButtonClick(rubinPDF)}
                />
            </div>

            {selectedPdf && (
                <div className="pdf-modal">
                    <div className="modal-content">
                        <button className="close-button" onClick={closeModal}>×</button>
                        <iframe src={selectedPdf} title="PDF Viewer" className="pdf-viewer" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default PageTwo;
