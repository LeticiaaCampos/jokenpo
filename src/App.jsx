import { useState } from "react";
import Jogo from "./componentes/jogo";
import Placar from "./componentes/placar";

export default function App() {
  const [placar, setPlacar] = useState({
    jogador: 0,
    computador: 0,
    empates: 0,
  });

  return (
    <div>
      <Jogo placar={placar} setPlacar={setPlacar} />
      <Placar placar={placar} />
    </div>
  );
}
