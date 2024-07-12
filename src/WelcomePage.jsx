import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function WelcomePage() {
    const [fontIndex, setFontIndex] = useState(0);
    const navigate = useNavigate();

    const fonts = [
        'Arial', 'Arial Black', 'Helvetica', 'Verdana', 'Tahoma',
        'Trebuchet MS', 'Gill Sans', 'Noto Sans', 'Optima', 'Lucida Sans',
        'Times New Roman', 'Georgia', 'Palatino', 'Garamond', 'Bookman',
        'New Century Schoolbook', 'American Typewriter', 'Didot',
        'Courier', 'Courier New', 'Andale Mono', 'Lucida Console',
        'Brush Script MT', 'Comic Sans MS', 'Bradley Hand', 'Luminari'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setFontIndex((prevIndex) => (prevIndex + 1) % fonts.length);
        }, 150); // Change interval to 150ms

        return () => clearInterval(interval);
    }, [fonts.length]);

    return (
        <div className="App" onClick={() => navigate('/home')}>
            <h1 style={{ fontFamily: fonts[fontIndex] }}>YASHRAJ BAINS</h1>
        </div>
    );
}

export default WelcomePage;
