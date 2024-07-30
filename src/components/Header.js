import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="logo">
      <Link to="/">Arte Impressa</Link>
    </div>
    <nav className="nav">
      <Link to="/">Página Inicial</Link>
      <Link to="/produtos">Produtos</Link>
      <Link to="/sobre-nos">Sobre Nós</Link>
      <Link to="/ajuda">Ajuda</Link> {/* Link para a página de ajuda */}
    </nav>
  </header>
);

export default Header;
