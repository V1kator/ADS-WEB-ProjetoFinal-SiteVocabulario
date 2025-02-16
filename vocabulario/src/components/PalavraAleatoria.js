import React, { useState } from 'react';

const palavras = [
  { palavra: 'Alvedrio', significado: 'Liberdade de escolha ou de decisão.' },
  { palavra: 'Egrégio', significado: 'Ilustre, notável, distinto.' },
  { palavra: 'Inefável', significado: 'Algo tão extraordinário que não pode ser expresso em palavras.' },
  { palavra: 'Lânguido', significado: 'Fraco, sem vigor, abatido.' },
  { palavra: 'Prolixo', significado: 'Que se estende por muitas palavras, excessivamente detalhado.' }
];

function PalavraAleatoria() {
  const [palavraAtual, setPalavraAtual] = useState(null);
  const [mostrarSignificado, setMostrarSignificado] = useState(false);

  const gerarPalavra = () => {
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    setPalavraAtual(palavras[indiceAleatorio]);
    setMostrarSignificado(false);
  };

  return (
    <div className="palavra-container">
      <h2>Descubra uma Palavra Nova!</h2>
      <button onClick={gerarPalavra}>Gerar Palavra</button>
      {palavraAtual && (
        <div className="palavra-info">
          <h3>{palavraAtual.palavra}</h3>
          {!mostrarSignificado ? (
            <div>
              <p>Você sabe o que essa palavra significa?</p>
              <button onClick={() => setMostrarSignificado(true)}>Mostrar Significado</button>
            </div>
          ) : (
            <p><strong>Significado:</strong> {palavraAtual.significado}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default PalavraAleatoria;