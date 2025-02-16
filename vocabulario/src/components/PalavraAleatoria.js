import React, { useState } from 'react';

const palavras = [
  { palavra: 'Alvedrio', significado: 'Liberdade de escolha ou de decisão.' },
  { palavra: 'Egrégio', significado: 'Ilustre, notável, distinto.' },
  { palavra: 'Inefável', significado: 'Algo tão extraordinário que não pode ser expresso em palavras.' },
  { palavra: 'Lânguido', significado: 'Fraco, sem vigor, abatido.' },
  { palavra: 'Prolixo', significado: 'Que se estende por muitas palavras, excessivamente detalhado.' },
  { palavra: 'Aberrante', significado: 'Que se desvia do normal ou esperado.' },
  { palavra: 'Acídulo', significado: 'Levemente ácido ou azedo.' },
  { palavra: 'Alacridade', significado: 'Alegria ou entusiasmo ao realizar algo.' },
  { palavra: 'Ápice', significado: 'O ponto mais alto ou culminante.' },
  { palavra: 'Bajulação', significado: 'Adulação excessiva e interesseira.' },
  { palavra: 'Candura', significado: 'Inocência ou pureza de coração.' },
  { palavra: 'Deleznável', significado: 'Que é desprezível ou de pouca importância.' },
  { palavra: 'Eloquente', significado: 'Que se expressa de maneira clara e persuasiva.' },
  { palavra: 'Fátuo', significado: 'Vaidoso ou iludido com falsas aparências.' },
  { palavra: 'Frugal', significado: 'Moderado no consumo de alimentos e bens.' },
  { palavra: 'Inócuo', significado: 'Que não causa dano; inofensivo.' },
  { palavra: 'Irrepreensível', significado: 'Que não merece crítica; perfeito.' },
  { palavra: 'Lascivo', significado: 'Que demonstra sensualidade excessiva.' },
  { palavra: 'Magnânimo', significado: 'Generoso e elevado de espírito.' },
  { palavra: 'Nefasto', significado: 'Que traz má sorte ou consequências ruins.' },
  { palavra: 'Oblíquo', significado: 'Que não é direto ou reto; enviesado.' },
  { palavra: 'Parcimonioso', significado: 'Que age com economia ou moderação.' },
  { palavra: 'Perscrutar', significado: 'Investigar ou examinar cuidadosamente.' },
  { palavra: 'Procrastinar', significado: 'Adiar ou deixar para depois.' },
  { palavra: 'Ressalva', significado: 'Restrição ou condição imposta.' },
  { palavra: 'Reticente', significado: 'Que não revela tudo o que sabe; reservado.' },
  { palavra: 'Sagaz', significado: 'Perspicaz, inteligente e atento.' },
  { palavra: 'Soturno', significado: 'Melancólico, triste ou sombrio.' },
  { palavra: 'Taciturno', significado: 'Silencioso, pouco comunicativo.' },
  { palavra: 'Ubíquo', significado: 'Que está presente em vários lugares ao mesmo tempo.' },
  { palavra: 'Verossímil', significado: 'Que parece verdadeiro ou real.' },
  { palavra: 'Vicissitude', significado: 'Mudança ou alternância de circunstâncias.' },
  { palavra: 'Xenófobo', significado: 'Que tem aversão a estrangeiros.' },
  { palavra: 'Zeugma', significado: 'Figura de linguagem em que se omite um termo já expresso anteriormente.' }

];

function PalavraAleatoria() {
  const [palavraAtual, setPalavraAtual] = useState(null);
  const [mostrarSignificado, setMostrarSignificado] = useState(false);
  const [resposta, setResposta] = useState(null); // null | 'acertou' | 'errou'

  const gerarPalavra = () => {
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    setPalavraAtual(palavras[indiceAleatorio]);
    setMostrarSignificado(false);
    setResposta(null);
  };

  const handleResposta = (tipo) => {
    setResposta(tipo);
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
            <div>
              <p><strong>Significado:</strong> {palavraAtual.significado}</p>
              <p>Você acertou o significado?</p>
              <button onClick={() => handleResposta('acertou')}>Sim</button>
              <button onClick={() => handleResposta('errou')}>Não</button>
              {resposta && (
                <div className={`resposta-mensagem ${resposta}`}>
                  {resposta === 'acertou' ? 'Parabéns! Você acertou! 🎉' : 'Não desista! Continue tentando! 💪'}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PalavraAleatoria;