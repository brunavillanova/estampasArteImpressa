import React from 'react';
import './FAQ.css';

const FAQ = () => (
  <div className="faq">
    <div className="faq-header">
      <h1>FAQ</h1>
    </div>
    <div className="faq-section">
      <div className="faq-category">
        <h2>Pedidos</h2>
        <details>
          <summary>Posso comprar como pessoa física?</summary>
          <p>Sim, atendemos tanto pessoas físicas quanto jurídicas.</p>
        </details>
        <details>
          <summary>Existe uma quantidade mínima exigida para compra de produtos personalizados?</summary>
          <p>Sim, a quantidade mínima é de 50 peças para produtos personalizados.</p>
        </details>
      </div>
    </div>
  </div>
);

export default FAQ;
