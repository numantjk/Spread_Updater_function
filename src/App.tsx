import { useState } from 'react'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
    console.log(count)

  return (
      <div>
      <h1>Vite + React</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
          )
}

export default App;
