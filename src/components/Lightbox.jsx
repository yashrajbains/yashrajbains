import { useEffect, useState } from 'react';

export default function Lightbox({ src, alt, caption, onClose }) {
  const [closing, setClosing] = useState(false);

  // Lock background scroll + Esc to close
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, 180); // match CSS animation duration
  };

  return (
    <div
      className={`lightbox ${closing ? 'is-closing' : ''}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      {/* If you want to keep the X as well, leave this. Or remove this button line entirely. */}
      <button className="lightbox__close" aria-label="Close" onClick={handleClose}>×</button>

      <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
        <img className="lightbox__img" src={src} alt={alt || ''} />
        {caption && <p className="lightbox__caption">{caption}</p>}
      </div>
    </div>
  );
}
