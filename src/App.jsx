import { useState } from 'react'
import './App.css'

function App() {
  const list = ['a', 'b', 'c'];

  return (
    <>
      <ul>
        {list.map((it) => (
          <li>{it}</li>
        ))}
      </ul>
    </>
  )
}

export default App
