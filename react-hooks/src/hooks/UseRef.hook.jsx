import { useEffect, useRef, useState } from "react"

function UseRef() {

    function Counter(){
        const [contador, setContador] = useState(0);
        const contadorRef = useRef(0);

        useEffect(() => {
          setInterval(() => {
            console.log(contadorRef.current)
          }, 2000);
        }, []);

        useEffect(() => {
          contadorRef.current = contador;
        }, [contador]);

        return (
          <>
            <button onClick={() => setContador(contador + 1)}> Contador: {contador}</button>
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
