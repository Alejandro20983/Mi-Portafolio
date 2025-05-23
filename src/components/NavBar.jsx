import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">Mi Portafolio</div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/" onClick={closeMenu}>Inicio</Link>
        </li>
        <li className={location.pathname === '/sobremi' ? 'active' : ''}>
          <Link to="/sobremi" onClick={closeMenu}>Sobre Mí</Link>
        </li>
        <li className={location.pathname === '/proyectos' ? 'active' : ''}>
          <Link to="/proyectos" onClick={closeMenu}>Proyectos</Link>
        </li>
        <li className={location.pathname === '/contacto' ? 'active' : ''}>
          <Link to="/contacto" onClick={closeMenu}>Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
