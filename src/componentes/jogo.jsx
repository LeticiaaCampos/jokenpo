import React, { useState } from 'react';
import Resultado from './resultado';
import JogarNovamente from './jogarnovamente';

export default function Jogo({ placar, setPlacar }) {
  const [escolhaJogador, setEscolhaJogador] = useState(null);
  const [escolhaComputador, setEscolhaComputador] = useState(null);
  const opcoes = ['Pedra', 'Papel', 'Tesoura'];
  const [resultado, setResultado] = useState('');

  const escolherComputador = () => {
    const escolha = opcoes[Math.floor(Math.random() * opcoes.length)];
    setEscolhaComputador(escolha);
    return escolha;
  };

  const verificarResultado = (escolhaJogador, escolhaComputador) => {
    if (
      (escolhaJogador === 'Pedra' && escolhaComputador === 'Tesoura') ||
      (escolhaJogador === 'Papel' && escolhaComputador === 'Pedra') ||
      (escolhaJogador === 'Tesoura' && escolhaComputador === 'Papel')
    ) {
      setPlacar((prevPlacar) => ({ ...prevPlacar, jogador: prevPlacar.jogador + 1 }));
      setResultado('Você ganhou!');
    } else if (escolhaJogador === escolhaComputador) {
      setPlacar((prevPlacar) => ({ ...prevPlacar, empates: prevPlacar.empates + 1 }));
      setResultado('Empate!');
    } else {
      setPlacar((prevPlacar) => ({ ...prevPlacar, computador: prevPlacar.computador + 1 }));
      setResultado('O computador ganhou!');
    }
  };

  const jogar = (escolha) => {
    setEscolhaJogador(escolha);
    const escolhaComputador = escolherComputador();
    verificarResultado(escolha, escolhaComputador);
  };

  const reiniciarJogo = () => {
    setPlacar({ jogador: 0, computador: 0, empates: 0 });
    setEscolhaJogador(null);
    setEscolhaComputador(null);
    setResultado('');
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <h2 className="text-3xl font-bold">Jogo Pedra, Papel, Tesoura</h2>
      <div className="flex items-center space-x-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-md shadow-lg"
          onClick={() => jogar('Pedra')}
        >
          Pedra
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-md shadow-lg"
          onClick={() => jogar('Papel')}
        >
          Papel
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-md shadow-lg"
          onClick={() => jogar('Tesoura')}
        >
          Tesoura
        </button>
      </div>
      {escolhaJogador && escolhaComputador && (
        <Resultado escolhaJogador={escolhaJogador} escolhaComputador={escolhaComputador} resultado={resultado} />
      )}
      <JogarNovamente jogarNovamente={reiniciarJogo} />
    </div>
  );
}

