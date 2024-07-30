import React from 'react';
import './AboutUs.css';

const AboutUs = () => (
  <div className="about-us">
    <h1>Sobre Nós</h1>
    <img src={`${process.env.PUBLIC_URL}/img/estampa silks.png`} alt="Sobre Nós" className="about-us-image" />
    <p>
      A Arte Impressa é uma empresa dedicada a fornecer camisetas de alta qualidade com designs personalizados. Nossa missão é oferecer produtos de qualidade excepcional e um serviço ao cliente incomparável.
    </p>
    <img src={`${process.env.PUBLIC_URL}/img/estampa.jpg`} alt="Equipe" className="about-us-image" />
    <p>
      Fundada em 2024, a Arte Impressa rapidamente se tornou uma referência no mercado de camisetas personalizadas, atendendo a uma ampla variedade de clientes, desde pequenas empresas até grandes corporações.
    </p>
    <p>
      Utilizamos tecnologia de ponta para garantir que cada estampa seja perfeita e duradoura. Nossa equipe é composta por profissionais experientes e apaixonados pelo que fazem.
    </p>
    <p>
      Obrigado por escolher a Arte Impressa para suas necessidades de camisetas personalizadas. Estamos ansiosos para servi-lo!
    </p>
  </div>
);

export default AboutUs;
