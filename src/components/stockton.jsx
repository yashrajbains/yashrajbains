import React from 'react';

function Stockton() {
    return (
        <div>
            <h1>Photos from Stockton, California</h1>
            {/* Add your photos or other content here */}
            <img
                src={`${process.env.PUBLIC_URL}/images/stocktonCover.jpg`}
                alt="Stockton"
                style={{ width: '100%', height: 'auto' }}
            />
        </div>
    );
}

export default Stockton;
