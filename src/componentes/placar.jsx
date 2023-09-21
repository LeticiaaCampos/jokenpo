import React from 'react';

export default function Placar({ placar }) {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center mt-4">
    <h2 className="text-2xl font-bold mb-4">Placar:</h2>
    <div className="grid grid-cols-3 gap-2">
      <div className="col-span-1">
        <p className="text-blue-500 text-lg font-bold">Jogador:</p>
        <p className="text-4xl font-bold">{placar.jogador}</p>
      </div>
      <div className="col-span-1">
        <p className="text-red-500 text-lg font-bold">Computador:</p>
        <p className="text-4xl font-bold">{placar.computador}</p>
      </div>
      <div className="col-span-1">
        <p className="text-gray-600 text-lg font-bold">Empates:</p>
        <p className="text-4xl font-bold">{placar.empates}</p>
      </div>
    </div>
  </div>
  );
}
