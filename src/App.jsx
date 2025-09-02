import { useState } from 'react'
import './App.css'
import { RickAndMortyCharacter } from './components/RickAndMortyCharacter'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <RickAndMortyCharacter />
    </>
  )
}

export default App
