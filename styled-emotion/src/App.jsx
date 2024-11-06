
import styled from '@emotion/styled'
import './App.css'
import { useState } from 'react'
import { keyframes, ThemeProvider } from '@emotion/react'

function App() {

  const tema = {
    corDaFonte: 'black',
    corDoFundo: 'white'
  }

  const sumir = keyframes`
      0%{
        opacity: 1;
      }

      100%{
        opacity: 0;
      }
  `;

  const MinhaDiv = styled('div')`
    background-color: ${(props) => props.ligado ? 'green' : 'white'};
    color: blue;
    font-size: 50px;
  `

  const OutraDiv = styled(MinhaDiv)`
    padding: 25px;
    border: 10px solid black;
  `
  const [ligado, setLigado] = useState();

  const NovaDiv = styled('div')`
    background-color: ${(props) => props.theme.corDoFundo};
    color: ${(props) => props.theme.corDaFonte};;
    font-size: 50px;

    .subTitulo {
      font-size: 20px;
    }

    &:hover span{
      color: red;
      animation: ${sumir} 1s ease alternate-reverse infinite;
      @media (max-width: 600px) {
        color: black;
      }
    }
  `

  return (
    <>
    <ThemeProvider theme={tema}>
        {/* <div onClick={() => setLigado(!ligado)}>
          <MinhaDiv ligado={ligado}>Teste</MinhaDiv>
        </div>
        <OutraDiv>Outra Div</OutraDiv> */}

        <NovaDiv>
          Strolker<br />
          <span className={'subTitulo'}>Player Mais foda de todos</span>
        </NovaDiv>
      </ThemeProvider>
    </>
  )
}

export default App
