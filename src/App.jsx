import { useState } from 'react'
import Product from './components/Product'
import FemaleScar from './components/FemaleScar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FemaleScar />
    </>
  )
}

export default App
