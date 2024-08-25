import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import WelcomePage from './WelcomePage';
import HomePage from './components/homePage';
import PageOne from './components/pageOne';
import PageTwo from './components/pageTwo';
import Stockton from './components/stockton';
import ImageView from './components/ImageView';
import Paris from './components/paris';
import Atlanta from './components/atlanta';



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/page-one" element={<PageOne />} />
                <Route path="/page-two" element={<PageTwo />} />
                <Route path="/stockton-photos" element={<Stockton />} />
                <Route path="/paris-photos" element={<Paris />} />
                <Route path="/atlanta-photos" element={<Atlanta />} /> {/* Add this line */}
                <Route path="/image-view" element={<ImageView />} />  {/* New route for image view */}
            </Routes>
        </Router>
    );
}

export default App;
