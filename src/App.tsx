import { useReducer } from "react"
import "./App.css"
import Form from "./components/Form"
import { CountProvider } from "./provider/count-provider"

function reducer(
  state: { age: number },
  action: { type: string }
): { age: number } {
  console.log(state, action)
  switch (action.type) {
    case "INCREMENT":
      return { age: state.age + 1 }
    case "DECREMENT":
      return { age: state.age - 1 }
    case "TWOSTABLE":
      return { age: state.age * 2 }
    case "POWERN":
      return { age: state.age * state.age }
    case "DIVISION":
      return { age: state.age / 10 }
    default:
      throw new Error("Unknown action")
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, { age: 10 })

  const handleIncrease = () => {
    dispatch({ type: "INCREMENT" })
  }
  const handleDecrease = () => {
    dispatch({ type: "DECREMENT" })
  }
  const handleTwosTable = () => {
    dispatch({ type: "TWOSTABLE" })
  }
  const handlePower = () => {
    dispatch({ type: "POWERN" })
  }
  const handleDivision = () => {
    dispatch({ type: "DIVISION" })
  }
  return (
    <>
      <CountProvider>
        <div className="App">
          <h1>useReducer Practice</h1>
          <h1>Age is {state.age}</h1>
          <button onClick={handleIncrease}>Increase Age</button>
          <button onClick={handleDecrease}>Decrease Age</button>
          <button onClick={handleTwosTable}>*2 Age</button>
          <button onClick={handlePower}>*Age</button>
          <button onClick={handleDivision}>/Age</button>
        </div>
        <Form />
      </CountProvider>
    </>
  )
}

export default App
