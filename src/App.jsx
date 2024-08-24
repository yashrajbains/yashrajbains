import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage';
import PageOne from './components/pageOne';
import PageTwo from './components/pageTwo';
import Stockton from './components/stockton';
import Paris from './components/paris'; // Import Paris component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pageOne" element={<PageOne />} />
                <Route path="/pageTwo" element={<PageTwo />} />
                <Route path="/stockton-photos" element={<Stockton />} />
                <Route path="/paris-photos" element={<Paris />} /> {/* Add this route */}
            </Routes>
        </Router>
    );
}

export default App;
