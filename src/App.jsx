import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import WelcomePage from './WelcomePage';
import HomePage from './components/homePage';
import PageOne from './components/pageOne';
import PageTwo from './components/pageTwo';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/page-one" element={<PageOne />} />
                <Route path="/page-two" element={<PageTwo />} />
            </Routes>
        </Router>
    );
}

export default App;
