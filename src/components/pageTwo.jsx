import React, { useEffect, useState } from 'react';
import BackButton from './BackButton.jsx';
import './PageTwo.css';

import raregemsImg from '../assets/raregems.png';
import rubinImg from '../assets/rubin.png';
import rweekImg from '../assets/rweek.png';

import raregemsPDF from '../assets/Rare Gems Poster FINAL.pdf';
import rubinPDF from '../assets/RSCA 2025 - Yashraj Bains.pdf';
import rcwPDF from '../assets/RCW_final.pdf';
import DNP from '../assets/DNP_LLNL_Yash_FINAL.pdf'

function PageTwo() {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect small screens (and iOS behavior)
  useEffect(() => {
    const m = window.matchMedia('(max-width: 768px)');
    const set = () => setIsMobile(m.matches);
    set();
    m.addEventListener('change', set);
    return () => m.removeEventListener('change', set);
  }, []);

  // Add/curate your conferences here (most recent first if you like)
  const posters = [
    { img: raregemsImg, pdf: raregemsPDF, alt: 'Rare Gems Poster' },
    { img: rubinImg,    pdf: rcwPDF,      alt: 'Rubin Week Poster' },
    { img: rweekImg,    pdf: rubinPDF,    alt: 'RCW Poster', bottom: true },
    { img: dnpImg,         pdf: DNP,         alt: 'APS DNP 2025'},

    // Add your new conferences here:
    // { img: someThumb, pdf: somePdf, alt: 'Conference XYZ, 2025' },
  ];

  const handleButtonClick = (pdfPath) => {
    if (isMobile) {
      // On phones/tablets, open in a new tab to avoid iOS zoom issues
      const url = `${pdfPath}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedPdf(pdfPath);
      // Lock background scroll while modal is open
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setSelectedPdf(null);
    document.body.style.overflow = '';
  };

  // For browsers that understand it, suggest a page-width zoom
  const iframeSrc = selectedPdf
    ? `${selectedPdf}#view=FitH&zoom=page-width`
    : '';

  return (
    <div className="App">
      <BackButton />

      <div className="button-grid">
        {posters.map((p, i) => (
          <img
            key={i}
            src={p.img}
            alt={p.alt || 'Poster'}
            className={`pdf-button ${p.bottom ? 'bottom' : ''}`}
            onClick={() => handleButtonClick(p.pdf)}
            loading="lazy"
          />
          
        ))}
      </div>

      

      {/* Desktop/Laptop modal only */}
      {selectedPdf && !isMobile && (
        <div className="pdf-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <iframe
              className="pdf-viewer"
              src={iframeSrc}
              title="PDF Viewer"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default PageTwo;
