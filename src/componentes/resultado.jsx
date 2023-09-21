import React from 'react';

export default function Resultado({ escolhaJogador, escolhaComputador, resultado }) {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center mt-4">
    <h2 className="text-2xl font-bold">Resultado:</h2>
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div className="col-span-1">
        <p className="text-lg font-bold">Você escolheu:</p>
        <p className="text-3xl font-bold">{escolhaJogador}</p>
      </div>
      <div className="col-span-1">
        <p className="text-lg font-bold">Computador escolheu:</p>
        <p className="text-3xl font-bold">{escolhaComputador}</p>
      </div>
      <div className="col-span-2 mt-4">
        <p className="text-xl font-bold">{resultado}</p>
      </div>
    </div>
  </div>
  );
}

