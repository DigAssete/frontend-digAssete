import { useState } from 'react'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Product/>
    </>
  )
}

export default App
