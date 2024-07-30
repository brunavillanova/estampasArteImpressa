import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetails.css';

const productData = {
  1: {
    name: 'Camiseta Longline de Algodão Premium Feminina',
    description: 'Malha Premium 100% Algodão Penteada 30/1 BCI com proteção UV50+',
    image: '/img/longlinefeminina.png',
    sizes: ['P', 'M', 'G', 'GG', 'X1', 'X2', 'X3'],
    whatsappMessage: 'Olá, gostaria de solicitar um orçamento para a Camiseta Longline de Algodão Premium Feminina.'
  },
  2: {
    name: 'Camiseta longline de Algodão Basic',
    description: 'Malha 100% Algodão Penteada',
    image: '/img/longlinepretafeminina.webp',
    sizes: ['P', 'M', 'G', 'GG', 'X1', 'X2', 'X3'],
    whatsappMessage: 'Olá, gostaria de solicitar um orçamento para a Camiseta longline de Algodão Basic.'
  },
  3: {
    name: 'Camiseta longline masculina ',
    description: 'Malha 100% Poliéster',
    image: '/img/longlinemasculinabranca.jpg',
    sizes: ['P', 'M', 'G', 'GG', 'X1', 'X2', 'X3'],
    whatsappMessage: 'Olá, gostaria de solicitar um orçamento para a Camiseta longline masculina.'
  },
  4: {
    name: 'Camiseta Longline masculina',
    description: 'Malha 100% Algodão Penteada',
    image: '/img/longlinemasculinapreta.jpg',
    sizes: ['P', 'M', 'G', 'GG', 'X1', 'X2', 'X3'],
    whatsappMessage: 'Olá, gostaria de solicitar um orçamento para a Camiseta Longline masculina.'
  },
  5:{
    name: 'Top Feminino',
    description: 'Malha 100% Algodão',
    image: '/img/top´branco.webp',
    sizes: ['P', 'M', 'G', 'GG', 'X1', 'X2', 'X3'],
    whatsappMessage: 'Olá, gostaria de solicitar um orçamento para a Top Feminina.'

  },
  6:{
    id: 6,
    name: 'Camiseta de Algodão Basic Feminina',
    description: 'Malha 100% Algodão Penteada',
    image: '/img/camiseta preta.png',
    whatsappMessage: 'Olá, gostaria de solicitar um orçamento para a Camiseta de Algodão Basic Feminina.',
    sizes: ['P', 'M', 'G', 'GG', 'X1', 'X2', 'X3']

  },
  7:{
    id: 7,
    name: 'Camiseta de Poliéster',
    description: 'Malha 100% Poliéster',
    image: '/img/camiseta branca.png',
    whatsappMessage: 'Olá, gostaria de solicitar um orçamento para a Camiseta de Poliéster.',
    sizes: ['P', 'M', 'G', 'GG', 'X1', 'X2', 'X3']
  }


};

const ProductDetails = () => {
  const { productId } = useParams();
  const product = productData[productId];

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-details-image" />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Tamanhos Disponíveis: {product.sizes.join(', ')}</p>
      <a 
        href={`https://api.whatsapp.com/send?phone=11971552389&text=${encodeURIComponent(product.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="quote-button"
      >
        Orçamento Rápido
      </a>
      <Link to="/editor" className="customize-button">Mande sua Estampa</Link>
    </div>
  );
};

export default ProductDetails;
