import React from 'react';
import './index.css';
import fitshine from './img/fitshine.png'; // Certifique-se que este caminho esteja correto 

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={fitshine} alt="FitShine Logo" className="logo" />
        <nav className="nav">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Dicas</a>
          <a href="#" className="nav-link">Profissionais</a>
          <a href="#" className="nav-link">SOS</a>
          <a href="#" className="nav-link">Descontos</a>
        </nav>
      </header>

      <main className="main-content">
        <div className="card">
          <div className="congratulations">
            {/* Espaço reservado para o "Parabéns" */}
          </div>
          <div className="welcome-back">
            <h2>🎉 Bem-vindo de volta! 🎉</h2>
            <p>
              Para celebrar sua dedicação, temos uma oferta exclusiva para você:
              <strong> 10% de desconto</strong> em consultas com nosso nutricionista ou em aulas
              personalizadas com nosso treinador! Aproveite esta oportunidade para otimizar sua
              rotina de treino e alimentação com o apoio profissional que você precisa para
              alcançar seus objetivos mais rápido.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
