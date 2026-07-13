// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import './App.css';
import WelcomePage from './WelcomePage';
import HomePage from './components/homePage';
import PageOne from './components/pageOne';
import PageTwo from './components/pageTwo';
import Stockton from './components/stockton';
import ImageView from './components/ImageView';
import Paris from './components/paris';
import Atlanta from './components/atlanta';
import Chicago from './components/chicago';
import NewYork from './components/newyork';
import SanJose from './components/SanJose';
import MexicoCity from './components/mexicoCity';
import Hawaii from './components/hawaii';
import Bangkok from './components/bangkok';
import ChiangMai from './components/chiangMai';
import HongKong from './components/hongKong';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/page-one" element={<PageOne />} />
      <Route path="/page-two" element={<PageTwo />} />
      <Route path="/stockton" element={<Stockton />} />
      <Route path="/paris" element={<Paris />} />
      <Route path="/atlanta" element={<Atlanta />} />
      <Route path="/image-view" element={<ImageView />} />
      <Route path="/chicago" element={<Chicago />} />
      <Route path="/newyork" element={<NewYork />} />
      <Route path="/SanJose" element={<SanJose />} />
      <Route path="/mexicoCity" element={<MexicoCity />} />
      <Route path="/hawaii" element={<Hawaii />} />
      <Route path="/bangkok" element={<Bangkok />} />
      <Route path="/chiangMai" element={<ChiangMai />} />
      <Route path="/hongKong" element={<HongKong />} />
    </Routes>
  );
}
