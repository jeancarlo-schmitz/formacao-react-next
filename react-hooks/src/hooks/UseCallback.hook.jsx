import { useCallback, useEffect, useState } from "react"

function UseCallback() {

  function Counter() {
    const [contadorA, setContadorA] = useState(0);
    const [contadorB, setContadorB] = useState(0);
    const printaB = useCallback(() => {
      console.log(contadorB)
    }, [contadorB])

    useEffect(() => {
      printaB(contadorB)
    }, [contadorB]);

    return (
      <>
        <button onClick={() => setContadorA(contadorA + 1)}>
          ContadorA: {contadorA}
        </button>
        <button onClick={() => setContadorB(contadorB + 1)}>
          ContadorB: {contadorB}
        </button>
      </>
    )
  }

  return (
    <>
      <h1>Use State - Hook</h1>
      <Counter />
    </>
  )
}

export default UseCallback
