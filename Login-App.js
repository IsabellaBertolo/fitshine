import React from 'react';
import './index.css';
import Logotipo from './img/fitshine.png';

function App() {
  return (
    <div className="login-container">
      <header className="header">
        <div className="logo-container">
          <img
            src={Logotipo}// Substitua pelo link real do logo ou caminho local
            alt="FitShine Logo"
            className="logo"
          />
        </div>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/dicas">Dicas</a>
          <a href="/profissionais">Profissionais</a>
          <a href="/sos">SOS</a>
          <a href="/descontos">Descontos</a>
        </nav>
      </header>

      <div className="login-box">
        <h2>BEM VINDO(A) AO <span className="highlight">FITSHINE</span></h2>
        <p>
          Acesse sua conta e obtenha descontos exclusivos com os personal trainers e nutricionistas da nossa plataforma.
        </p>
        <form>
          <input type="text" placeholder="LOGIN" className="input-field" />
          <input type="password" placeholder="SENHA" className="input-field" />
          <button type="submit" className="submit-button">ENTRAR</button>
        </form>
        <div className="divider">
          <span>ou</span>
        </div>
        <button className="register-button">CADASTRE-SE</button>
      </div>
    </div>
  );
}

export default App;
