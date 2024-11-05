import { useState } from 'react'
import './App.css'
import UserForm from './components/UserForm'
import FormState from './components/FormState'
import FormStatus from './components/FormStatus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UserForm /> */}
      {/* <FormState /> */}
      <FormStatus />
    </>
  )
}

export default App
