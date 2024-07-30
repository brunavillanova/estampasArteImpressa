import React, { useState } from 'react';
import './FormasDePagamento.css';

const FormasDePagamento = () => {
  const [feedbackGiven, setFeedbackGiven] = useState(false);

  const handleFeedback = (response) => {
    if (response === 'yes') {
      setFeedbackGiven(true);
    }
  };

  return (
    <div className="formas-de-pagamento">
      <div className="content">
        <h1>Formas de Pagamento</h1>
        <p>Quais são as formas de pagamento e condições aceitas pela loja?</p>
        <p>Em nossa loja é possível pagar no Boleto Bancário, PIX, Cartão de Crédito, Elo, Visa e MasterCard.</p>
        <ul>
          <li>As condições para pagamento à vista são no PIX e Boleto Bancário conforme condições de preços em cada produto anunciado.</li>
          <li>Para cartões de crédito, as condições são de até 3x sem juros conforme descrito em cada produto anunciado.</li>
          <li>Outras condições e formas de pagamento poderão ser negociadas para pedidos com quantidades maiores.</li>
        </ul>
      </div>
      <div className="feedback">
        {!feedbackGiven ? (
          <>
            <p>Isto foi útil?</p>
            <button onClick={() => handleFeedback('yes')}>Sim</button>
            <button onClick={() => handleFeedback('no')}>Não</button>
          </>
        ) : (
          <p>Obrigado pelo seu feedback!</p>
        )}
      </div>
    </div>
  );
};

export default FormasDePagamento;
