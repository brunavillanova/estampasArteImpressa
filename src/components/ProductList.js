import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

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
    description: 'Malha 100% Algodão ',
    image: '/img/longlinepretafeminina.webp',
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
    description: 'Malha 100% Algodão',
    image: '/img/longlinefeminina.png',
    sizes: ['P', 'M', 'G', 'GG', 'X1', 'X2', 'X3'],
    whatsappMessage: 'Olá, gostaria de solicitar um orçamento para a Camiseta Longline de Algodão Premium Feminina.'
  },
  {
    id:5,
    name: 'Camiseta Longline de Algodão Masculina',
    description: 'Malha 100% Algodão',
    image: '/img/longlinemasculinapreta.jpg',
    sizes: ['P', 'M', 'G', 'GG', 'X1', 'X2', 'X3'],
    whatsappMessage: 'Olá, gostaria de solicitar um orçamento para a Camiseta Longline de Algodão Masculina.'
  }
];

const ProductList = () => (
  <div className="product-list">
    <h1>Nossos Produtos</h1>
    <div className="product-list-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Tamanhos Disponíveis: {product.sizes.join(', ')}</p>
          <Link to={`/product/${product.id}`} className="details-button">Ver Detalhes</Link>
        </div>
      ))}
    </div>
  </div>
);

export default ProductList;
