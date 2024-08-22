import { useState } from 'react';

function Contador() {
  // const [nome_do_estado, função_que_altera_o_estado] = useState(valor_inicial_do_estado) é react
  const [valor, setValor] = useState(0);

  // função que altera o estado - TypeScript
  function handleClick() {

    setValor(valor + 1);
  }

  return (
    // Tuo que está dentro do return é HTML e CSS
    <div>

      <h2>Componente Contador</h2>

      <p> O valor atual do meu estado é: {valor}</p>

      <button onClick={handleClick}> Adicionar + 1 </button>

    </div>
  )
}

export default Contador