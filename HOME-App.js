import React, { useState } from 'react';
import logotipo from './img/logotipo.png';  // Importe a imagem corretamente
import carr1 from './img/carr1.png';  // Importe as imagens do carrossel
import carr2 from './img/carr2.png';
import carr3 from './img/carr3.png';
import carr4 from './img/carr4.png';
import inf1 from './img/inf1.png';  // Importe a imagem inf1
import inf2 from './img/inf2.png';  // Importe a imagem inf2

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [carr1, carr2, carr3, carr4];
  const totalSlides = slides.length;

  const showSlide = (index) => {
    if (index >= totalSlides) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(totalSlides - 1);
    } else {
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    showSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    showSlide(currentIndex - 1);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #5C1374, #2b0837)' }}>
      <header>
        <img src={logotipo} alt="Logotipo" />
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li className="dropdown">
              <a href="#">Dicas</a>
              <ul className="dropdown-content">
                <li><a href="#receitas">Receitas</a></li>
                <li><a href="#suplementacoes">Suplementações</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">Profissionais</a>
              <ul className="dropdown-content">
                <li><a href="#personal">Personal</a></li>
                <li><a href="#nutricionista">Nutricionista</a></li>
              </ul>
            </li>
            <li><a href="#sos">SOS</a></li>
            <li><a href="#descontos">Descontos</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="carousel">
          <div className="carousel-inner" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
            {slides.map((slide, index) => (
              <img key={index} src={slide} alt={`Imagem ${index + 1}`} />
            ))}
          </div>
          <button className="carousel-control prev" onClick={prevSlide}>&#10094;</button>
          <button className="carousel-control next" onClick={nextSlide}>&#10095;</button>
        </div>

        {/* Adicionado marginTop de 2cm (equivalente a 20px) */}
        <div className="info-section" style={{ 
          marginTop: '2cm',  /* Espaço adicionado aqui */
          padding: '20px', 
          maxWidth: '1200px', 
          marginLeft: 'auto', 
          marginRight: 'auto' 
        }}>
          <div className="info-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', justifyContent: 'flex-start' }}>
            <img src={inf1} alt="Imagem de Alimentação Saudável" style={{ width: '250px', height: 'auto' }} />
            <div style={{ marginLeft: '20px', flex: 1 }}>
              <h2 style={{ textAlign: 'center' }}>ALIMENTAÇÃO SAUDÁVEL</h2>
              <p>Uma alimentação saudável é crucial para o bem-estar e a prevenção de doenças. Ela fornece os nutrientes necessários para o corpo funcionar bem, melhora a energia e fortalece o sistema imunológico. Optar por alimentos nutritivos ajuda a manter a saúde física e mental em dia, promovendo uma vida mais equilibrada e ativa.</p>
            </div>
          </div>
          <div className="info-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            <img src={inf2} alt="Imagem de Atividades Físicas" style={{ width: '250px', height: 'auto' }} />
            <div style={{ marginLeft: '20px', flex: 1 }}>
              <h2 style={{ textAlign: 'center' }}>EXERCITE-SE</h2>
              <p>Praticar atividades físicas é vital para a saúde. Ela fortalece o coração, melhora o humor e ajuda a manter um peso saudável. Além disso, contribui para a flexibilidade e a resistência do corpo, promovendo um bem-estar geral.</p>
            </div>
          </div>
        </div>
      </main>
      <footer style={{ 
          position: 'relative', 
          backgroundColor: '#9d36a6d4', 
          color: '#fff', 
          textAlign: 'center', 
          padding: '10px 0',
          marginTop: '20px' 
        }}>
        <p>© 2024 Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
