import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetails.css';


const productData = {
  1: {
    name: 'Top Feminino',
    description: 'Malha 100% Algodão',
    image: '/img/top-branco.webp',
    sizes: ['P', 'M', 'G', 'GG', 'X1', 'X2', 'X3'],
    whatsappMessage: 'Olá, gostaria de solicitar um orçamento para a Top Feminina.',
    colors: ['#ffffff', '#000000', '#ff0000', '#00ff00'] // Cores disponíveis
  },
  2: {
    name: 'Camiseta de Algodão Basic',
    description: 'Malha 100% Algodão',
    image: '/img/longlinepretafeminina.webp',
    whatsappMessage: 'Olá, gostaria de solicitar um orçamento para a Camiseta de Algodão Basic.',
    sizes: ['P', 'M', 'G', 'GG', 'X1', 'X2', 'X3'],
    colors: ['#ffffff', '#000000', '#ff0000', '#00ff00'] // Cores disponíveis
  },
  3: {
    name: 'Camiseta longline masculina',
    description: 'Malha 100% Poliéster',
    image: '/img/longlinemasculinabranca.jpg',
    sizes: ['P', 'M', 'G', 'GG', 'X1', 'X2', 'X3'],
    whatsappMessage: 'Olá, gostaria de solicitar um orçamento para a Camiseta longline masculina.',
    colors: ['#ffffff', '#000000', '#ff0000', '#00ff00'] // Cores disponíveis
  },
  4: {
    name: 'Camiseta Longline de Algodão Premium Feminina',
    description: 'Malha 100% Algodão',
    image: '/img/longlinefeminina.png',
    sizes: ['P', 'M', 'G', 'GG', 'X1', 'X2', 'X3'],
    whatsappMessage: 'Olá, gostaria de solicitar um orçamento para a Camiseta Longline de Algodão Premium Feminina.',
    colors: ['#ffffff', '#000000', '#ff0000', '#00ff00'] // Cores disponíveis
  },
  5:{
    name: 'Camiseta Longline de Algodão Masculina',
    description: 'Malha 100% Algodão',
    image: '/img/longlinemasculinapreta.jpg',
    sizes: ['P', 'M', 'G', 'GG', 'X1', 'X2', 'X3'],
    whatsappMessage: 'Olá, gostaria de solicitar um orçamento para a Camiseta Longline de Algodão Masculina.',
    colors: ['#ffffff', '#000000', '#ff0000', '#00ff00'] // Cores disponíveis
  }
};

const ProductDetails = () => {
  const { productId } = useParams();
  const product = productData[productId];
  const [selectedColor, setSelectedColor] = useState(null);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-details-image" />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Tamanhos Disponíveis: {product.sizes.join(', ')}</p>

      <div className="color-selector">
        {product.colors.map((color, index) => (
          <div
            key={index}
            className={`color-option ${selectedColor === color ? 'selected' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          >
            {selectedColor === color && <span className="tick">✓</span>}
          </div>
        ))}
      </div>

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
