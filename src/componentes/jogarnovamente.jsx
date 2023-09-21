import React from 'react';

export default function JogarNovamente({ jogarNovamente }) {
  return (
    <div className="mt-4">
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={jogarNovamente}
      >
        Jogar Novamente
      </button>
    </div>
  );
}

