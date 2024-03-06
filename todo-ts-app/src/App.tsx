import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chest from './pages/Chest';
import Legs from './pages/Legs'
import Header from './components/Header';
import Footer from './components/Footer';
import Shoulders from './pages/Shoulders';
import Back from './pages/Back';
import Arms from './pages/Arms';


const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/legs" element={<Legs />} />
      <Route path="/arms" element={<Arms />} />
      <Route path="/back" element={<Back />} />
      <Route path="/chest" element={<Chest />} />
      <Route path="/shoulders" element={<Shoulders />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
