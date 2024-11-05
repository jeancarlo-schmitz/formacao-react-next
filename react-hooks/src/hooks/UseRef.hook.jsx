import { useEffect, useRef, useState } from "react"

function UseRef() {

    function Counter(){
        const [contador, setContador] = useState(0);
        const botao = useRef();

        useEffect(() => {
          
        });

        return (
          <>
            <button ref={botao} onClick={() => setContador(contador + 1)}> Contador: {contador}</button>
          </>
        )
    }

  return (
    <>
        <h1>Use Ref - Hook</h1>
        <Counter/>
    </>
  )
}

export default UseRef
