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
<<<<<<< HEAD
                
=======
                Pick /// One /// Pick /// One
>>>>>>> b3f0d64985ac9757ec8c2c339d41d72178af4ea6
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
