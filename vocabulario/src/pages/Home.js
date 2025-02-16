
// src/pages/Home.js
import React from 'react';
import PalavraAleatoria from '../components/PalavraAleatoria';

function Home() {
  return (
    <div className="home">
      <h1>Bem-vindo ao Melhorador de Vocabulário</h1>
      <p>Receba palavras raras da língua portuguesa e descubra seus significados!</p>
      <PalavraAleatoria />
    </div>
  );
}

export default Home;