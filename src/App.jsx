import { useState } from 'react'
import './App.css'
import { CustomHook } from './components/CustomHook'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <CustomHook></CustomHook>

    </>
  )
}

export default App
