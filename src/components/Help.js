import React from 'react';
import './Help.css';

const Help = () => (
  <div className="help">
    <h1>Ajuda</h1>
    <p>
      Bem-vindo à seção de ajuda da Arte Impressa. Aqui você encontrará respostas para as perguntas mais frequentes e informações úteis sobre nossos serviços.
    </p>
    <h2>Perguntas Frequentes</h2>
    <ul>
      <li><strong>Como posso personalizar minha camiseta?</strong> Utilize nossa ferramenta de personalização para adicionar texto e imagens à sua camiseta.</li>
      <li><strong>Quais são os métodos de pagamento aceitos?</strong> Aceitamos todos os principais cartões de crédito, PayPal e transferências bancárias.</li>
      <li><strong>Quanto tempo leva para minha camiseta ser entregue?</strong> O tempo de entrega varia de acordo com a localização, mas geralmente leva de 5 a 10 dias úteis.</li>
      <li><strong>Posso devolver uma camiseta personalizada?</strong> Infelizmente, não aceitamos devoluções de produtos personalizados, a menos que haja um defeito de fabricação.</li>
    </ul>
    <h2>Contato</h2>
    <p>
      Se você tiver qualquer outra dúvida, entre em contato conosco:
      <ul>
        <li>Email: suporte@arteimpressa.com</li>
        <li>Telefone: (11) 1234-5678</li>
      </ul>
    </p>
  </div>
);

export default Help;
