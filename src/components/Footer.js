import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Certifique-se de criar o arquivo de estilo
import { FaInstagram, FaFacebookF, FaPinterestP, FaWhatsapp } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-column">
        <h2>Arte Impressa</h2>
        <p>O prazer no trabalho nos leva a perfeição.</p>
        <div className="footer-social">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterestP /></a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>
      </div>
      <div className="footer-column">
        <h3>Produtos</h3>
        <ul>
          <li><button onClick={() => window.location.href='#'}>Camisetas de Algodão</button></li>
          <li><button onClick={() => window.location.href='#'}>Camiseta de Poliéster</button></li>
          <li><button onClick={() => window.location.href='#'}>Camisetas de Poliamida</button></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Suporte</h3>
        <ul>
          <li><Link to="/ajuda">Ajuda</Link></li>
          <li><Link to="/faq">FAQ</Link></li> 
          <li><Link to="/trocas-devolucoes">Trocas e Devoluções</Link></li> {/* Adicione o link para Trocas e Devoluções */}
          <li><a href="/formas-de-pagamento">Formas de Pagamento</a></li> {/* Adicione o link para Formas de Pagamento */}
          
        </ul>
      </div>
      <div className="footer-column">
        <h3>ArteImpressa</h3>
        <ul>
        <li><Link to="/sobre-nos">Sobre Nós</Link></li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; 2024 ArteImpressa Camisetas Personalizadas - Todos os direitos reservados - <a href="/politica-de-privacidade">Política de Privacidade</a></p>
      <p>Arte Impressa Ltda | CNPJ: 00.256.855/0005-00 | Jarinu - São Paulo - SP</p>
      <p>Feito com <span role="img" aria-label="heart">❤️</span> por ArteImpressa Camisetas Personalizadas</p>
    </div>
    <div className="whatsapp-contact">
      <a href="https://api.whatsapp.com/send?phone=11971552389" target="_blank" rel="noopener noreferrer">
        <img src={`${process.env.PUBLIC_URL}/img/icon.whats.png`} alt="WhatsApp" className="whatsapp-icon" />
        Precisa de Ajuda?
      </a>
    </div>
  </footer>
);

export default Footer;
