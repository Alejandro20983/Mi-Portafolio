// src/App.jsx
import React from 'react';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contacto';
import Footer from './components/Footer';
import Sobremi from './pages/Sobremi';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path='/sobremi' element={<Sobremi/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
