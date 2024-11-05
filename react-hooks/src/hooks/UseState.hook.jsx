import { useState } from "react"

function UseState() {

    function Counter(){
        const [contador, setContador] = useState(0);
        return <button onClick={() => setContador(contador + 1)}> Contador: {contador}</button>
    }

  return (
    <>
        <h1>Use State - Hook</h1>
        <Counter/>
    </>
  )
}

export default UseState
