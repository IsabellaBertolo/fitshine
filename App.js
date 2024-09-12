import React from 'react';
import './index.css';
import fitshine from './img/fitshine.png'; // Certifique-se que este caminho esteja correto

const FitShineReceitas = () => {
  return (
    <div>
      <header>
        <a href="#">
          <img src={fitshine} alt="FitShine Logo" id="logo" /> {/* Corrigido para usar a variável importada */}
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

      <section className="receitas">
        <h2>Receitas</h2>
        <div className="categorias-container">
          {/* Categoria: Café da manhã */}
          <Categoria
            titulo="Café da manhã"
            receitas={[
              { nome: "Salada de frutas", link: "https://www.receiteria.com.br/receita/salada-de-frutas-no-pote-com-iogurte-e-chia/" },
              { nome: "Pão de queijo", link: "https://www.receiteria.com.br/receita/pao-de-queijo-fit-facil/" },
              { nome: "Panqueca com Whey", link: "https://www.receiteria.com.br/receita/panqueca-fit-com-whey-de-cacau/" },
              { nome: "Crepioca", link: "https://www.receiteria.com.br/receita/crepioca/" },
            ]}
          />

          {/* Categoria: Almoço */}
          <Categoria
            titulo="Almoço"
            receitas={[
              { nome: "Salpicão fit", link: "https://www.receiteria.com.br/receita/salpicao-fit/" },
              { nome: "Strogonoff de frango light", link: "https://www.receiteria.com.br/receita/strogonoff-de-frango-light/" },
              { nome: "Carne moída com batatas e cenouras", link: "https://www.receiteria.com.br/receita/carne-moida-com-batatas-e-cenouras/" },
              { nome: "Omelete simples", link: "https://www.receiteria.com.br/receita/omelete-simples/" },
            ]}
          />

          {/* Categoria: Entradas e Saladas */}
          <Categoria
            titulo="Entradas e saladas"
            receitas={[
              { nome: "Ceviche de banana-da-terra", link: "https://www.receiteria.com.br/receita/ceviche-de-banana-da-terra/" },
              { nome: "Chips de batata-doce", link: "https://www.receiteria.com.br/receita/chips-assado-de-batata-doce-e-alecrim/" },
              { nome: "Patê de frango fit", link: "https://www.receiteria.com.br/receita/pate-de-frango-fitness/" },
              { nome: "Salada primavera simples", link: "https://www.receiteria.com.br/receita/salada-primavera-simples/" },
            ]}
          />

          {/* Categoria: Lanches */}
          <Categoria
            titulo="Lanches"
            receitas={[
              { nome: "Torta de frango com aveia", link: "https://www.receiteria.com.br/receita/torta-facil-com-massa-de-aveia/" },
              { nome: "Wrap fit integral", link: "https://www.receiteria.com.br/receita/wrap-fit-integral-facil/" },
              { nome: "Bolo de caneca de banana fit", link: "https://www.receiteria.com.br/receita/bolo-de-caneca-de-banana-fit/" },
              { nome: "Sanduíche de atum simples", link: "https://www.receiteria.com.br/receita/sanduiche-natural-de-atum-simples/" },
            ]}
          />

          {/* Categoria: Jantar */}
          <Categoria
            titulo="Jantar"
            receitas={[
              { nome: "Fricassé de frango light", link: "https://www.receiteria.com.br/receita/fricasse-de-frango-light/" },
              { nome: "Carne moída com abóbora", link: "https://www.receiteria.com.br/receita/carne-moida-com-abobora/" },
              { nome: "Filé de peixe no forno", link: "https://www.receiteria.com.br/receita/file-de-peixe-no-forno-facil/" },
              { nome: "Omelete de microondas", link: "https://www.receiteria.com.br/receita/omelete-de-caneca-de-micro-ondas/" },
            ]}
          />

          {/* Categoria: Sobremesas */}
          <Categoria
            titulo="Sobremesas"
            receitas={[
              { nome: "Sorvete de açaí fit", link: "https://www.receiteria.com.br/receita/sorvete-de-acai-fit/" },
              { nome: "Mousse de maracujá sem açúcar", link: "https://www.receiteria.com.br/receita/mousse-de-maracuja-sem-acucar/" },
              { nome: "Brigadeiro com 3 ingredientes", link: "https://www.receiteria.com.br/receita/brigadeiro-fit-com-3-ingredientes/" },
              { nome: "Barrinha proteica", link: "https://www.receiteria.com.br/receita/barrinha-proteica/" },
            ]}
          />
        </div>
      </section>
    </div>
  );
};

const Categoria = ({ titulo, receitas }) => {
  return (
    <div className="categoria">
      <h3>{titulo}</h3>
      <ul>
        {receitas.map((receita, index) => (
          <li key={index}>
            <a href={receita.link} target="_blank" rel="noopener noreferrer">
              {receita.nome}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FitShineReceitas;
