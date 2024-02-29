import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chest from './pages/Chest';
import Legs from './pages/Legs'
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chest" element={<Chest />} />
      <Route path="/legs" element={<Legs />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
