import { useState } from "react"
import { useReducer } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, { age: 10 })
  function reducer(state: any, action: any) {
    switch (action.type) {
      case "increment":
        return { age: state.age + 1 }
      case "decrement":
        return { age: state.age - 1 }
      default:
        throw new Error()
    }
  }

  const handleIncrease = () => {
    dispatch({ type: "increment" })
  }
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>useReducer Practice</h1>
      <h1>Age is {state.age}</h1>
      <button onClick={handleIncrease}>Increase Age</button>
      <div className="card">
        <h1>{count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>Increase</button>
        <br />
        <br />
        <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      {count ? <h1>Count is {count}</h1> : 0}
      <p className="read-the-docs">Noman Dhoni</p>
    </div>
  )
}

export default App
