import React from 'react';
import './index.css'; // Importar o arquivo CSS para estilos
import Logotipo from './img/fitshine.png';

const App = () => {
  return (
    <div>
      <header>
        <a href="#">
          <img src={Logotipo} alt="FitShine Logo" className="logotipo" />
        </a>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Dicas</a></li>
            <li><a href="#">Profissionais</a></li>
            <li><a href="#">SOS</a></li>
            <li><a href="#">Descontos</a></li>
          </ul>
        </nav>
      </header>

      <section className="banner">
        <h2>NÃO FAÇA ISSO ANTES DE TREINAR:</h2>
      </section>

      <section className="tips-section">
        {/* Primeira linha de dicas */}
        <div className="tips-container">
          <div className="tip">
            <h3>Nada de comer muito antes de treinar</h3>
            <p>
              Fazer um lanche leve até no máximo 30 minutos antes do início do treino é uma ótima maneira de garantir a energia necessária. Frutas são boas opções. Que tal uma fatia de pão integral com mel ou iogurte grego com frutas secas?
            </p>
          </div>
          <div className="tip">
            <h3>Alongamento Estático</h3>
            <p>
              Alongamentos estáticos - aqueles em que você mantém por um longo período de tempo - pode não ser uma boa opção. Seu sistema nervoso pode ativar alguns músculos e não outros, e seu corpo pode pensar que é hora de relaxar.
            </p>
          </div>
        </div>

        {/* Segunda linha de dicas */}
        <div className="tips-container">
          <div className="tip">
            <h3>Beber muita cafeína</h3>
            <p>
              Embora a cafeína possa ser ótima para despertar, ela também pode desidratá-lo, aumentar a frequência cardíaca e causar tonturas.
            </p>
          </div>
          <div className="tip">
            <h3>Dormir muito</h3>
            <p>
              Ter uma soneca por 20 ou 30 minutos pode até proporcionar mais energia antes do treino. No entanto, dormir por muito tempo antes de treinar poderá causar mais cansaço.
            </p>
          </div>
        </div>

        {/* Terceira linha de dicas */}
        <div className="tips-container">
          <div className="tip">
            <h3>Beber água com exagero</h3>
            <p>
              Estar excessivamente hidratado antes do treino pode ser algo negativo. Beber muita água traz riscos de uma condição rara e grave, chamada hiponatremia.
            </p>
          </div>
          <div className="tip">
            <h3>Ignorar o aquecimento</h3>
            <p>
              Em vez de fazer alongamento estático, faça um aquecimento simples para manter o corpo mais aquecido. Ignorar um aquecimento pode trazer problemas a longo prazo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
