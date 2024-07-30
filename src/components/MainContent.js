import React from 'react';
import './MainContent.css';

const MainContent = () => (
  <main className="main-content">
    <section className="intro">
      <h1>Camisetas Personalizadas</h1>
     
    </section>
    <section className="circle-images">
      <img src={`${process.env.PUBLIC_URL}/img/estampa1.jpg`} alt="Imagem 1" className="circle-image" />
      <img src={`${process.env.PUBLIC_URL}/img/estampa2.jpg`} alt="Imagem 2" className="circle-image" />
      <img src={`${process.env.PUBLIC_URL}/img/estampa3.jpg`} alt="Imagem 3" className="circle-image" />
      <img src={`${process.env.PUBLIC_URL}/img/estampa4.jpg`} alt="Imagem 4" className="circle-image" />
    </section>
  </main>
);

export default MainContent;
