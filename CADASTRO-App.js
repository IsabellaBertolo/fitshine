import React from "react";
import "./index.css";
import logotipo from './img/logotipo.png';  // Importe a imagem corretamente

function App() {
  return (
    <div className="app-container">
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

      <main className="main-content">
        <h1>CADASTRE-SE</h1>
        <p>
          CRIE SUA CONTA E OBTENHA DESCONTOS EXCLUSIVOS COM OS PERSONAIS E
          NUTRICIONISTAS DA NOSSA PLATAFORMA.
        </p>
        <div className="login-box">
          <input type="text" placeholder="LOGIN" className="input" />
          <input type="password" placeholder="SENHA" className="input" />
          <button className="button">CADASTRAR</button>
        </div>
      </main>

      <footer>
        <p>© 2024 Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
