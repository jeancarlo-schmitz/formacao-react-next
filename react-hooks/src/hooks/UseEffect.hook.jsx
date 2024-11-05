import { useEffect, useRef, useState } from "react"

function UseEffect() {

    function Counter(){
        const [contador, setContador] = useState(0);
        const [text, setText] = useState('');
        const botao = useRef();

        useEffect(() => {
          const interval = setInterval(() => {
            console.log(contador)
          }, 2000);

          return () => clearInterval(interval);
        }, [contador]);

        useEffect(() => {
          setContador(contador + 1);
        }, [text]);

        return (
          <>
            <input type="text" value={text} onChange={(event) => setText(event.target.value)}/>
            <button ref={botao} onClick={() => setContador(contador + 1)}> Contador: {contador}</button>
          </>
        )
    }

  return (
    <>
        <h1>Use Effect - Hook</h1>
        <Counter/>
    </>
  )
}

export default UseEffect
