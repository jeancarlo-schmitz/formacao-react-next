import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './pages/index'
import About from './pages/about'
import Produtos, { Produto } from './pages/produtos'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/about/:id' element={<About />}></Route>
        <Route path='/produtos/*' element={<Produtos />}>
          <Route path=':id' element={<Produto />}></Route>
        </Route>
      </Routes>


      <Link to="/">Home</Link> 
      <br />
      <Link to="/about/123">About</Link>
      <br />
      <Link to="/produtos">Produtos</Link>
    </div>
  )
}

export default App
