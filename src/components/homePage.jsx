import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../homePage.css';
import gifFixed from '../assets/gifFixed.gif';
import gif2 from '../assets/gif2.gif';

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="App">
            <h1 style={{ fontSize: '2.5rem', marginTop: '20px', marginBottom: '40px' }}>
                Pick /// One /// Pick /// One
            </h1>
            <div className="buttons">
                <img
                    src={gifFixed}
                    alt="Button 1"
                    className="animated-button"
                    onClick={() => navigate('/page-one')}
                />
                <img
                    src={gif2}
                    alt="Button 2"
                    className="animated-button"
                    onClick={() => navigate('/page-two')}
                />
            </div>
        </div>
    );
}

export default HomePage;
