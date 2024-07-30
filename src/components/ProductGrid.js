import React from 'react';
import { Link } from 'react-router-dom';
import './ProductGrid.css'; // Arquivo CSS para estilização da grade de produtos


const products = [
  {
    id:1,
    name: 'Top Feminino',
    description: 'Malha 100% Algodão',
    image: '/img/top´branco.webp',
    sizes: ['P', 'M', 'G', 'GG', 'X1', 'X2', 'X3'],
    whatsappMessage: 'Olá, gostaria de solicitar um orçamento para a Top Feminina.'
  },
  {
    id: 2,
    name: 'Camiseta de Algodão Basic',
    description: 'Malha 100% Algodão Penteada',
    image: '/img/camiseta preta.png',
    whatsappMessage: 'Olá, gostaria de solicitar um orçamento para a Camiseta de Algodão Basic.',
    sizes: ['P', 'M', 'G', 'GG', 'X1', 'X2', 'X3']
  },
  {
    id: 3,
    name: 'Camiseta longline masculina',
    description: 'Malha 100% Poliéster',
    image: '/img/longlinemasculinabranca.jpg',
    sizes: ['P', 'M', 'G', 'GG', 'X1', 'X2', 'X3'],
  },
  {
    id:4,
    name: 'Camiseta Longline de Algodão Premium Feminina',
    description: 'Malha Premium 100% Algodão Penteada 30/1 BCI com proteção UV50+',
    image: '/img/longlinefeminina.png',
    sizes: ['P', 'M', 'G', 'GG', 'X1', 'X2', 'X3'],
    whatsappMessage: 'Olá, gostaria de solicitar um orçamento para a Camiseta Longline de Algodão Premium Feminina.'
  }
];

const ProductGrid = () => (
  <div className="product-grid">
    {products.map(product => (
      <div key={product.id} className="product-card">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} className="product-image" />
        </Link>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <a 
          href={`https://api.whatsapp.com/send?phone=11971552389&text=${encodeURIComponent(product.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="quote-button"
        >
          Solicite Orçamento
        </a>
      </div>
    ))}
  </div>
);

export default ProductGrid;
