import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ProductGrid from './components/ProductGrid';
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';
import AboutUs from './components/AboutUs';
import Help from './components/Help';
import DesignEditor from './components/DesignEditor';
import FAQ from './components/FAQ';
import TrocasDevolucoes from './components/TrocasDevolucoes';
import FormasDePagamento from './components/FormasDePagamento'; // Importe o componente FormasDePagamento
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={
        <>
          <MainContent />
          <ProductGrid />
        </>
      } />
      <Route path="/product/:productId" element={<ProductDetails />} />
      <Route path="/produtos" element={<ProductList />} />
      <Route path="/sobre-nos" element={<AboutUs />} />
      <Route path="/ajuda" element={<Help />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/editor" element={<DesignEditor />} />
      <Route path="/trocas-devolucoes" element={<TrocasDevolucoes />} />
      <Route path="/formas-de-pagamento" element={<FormasDePagamento />} /> {/* Adicione a nova rota */}
    </Routes>
    <Footer />
  </Router>
);

export default App;
