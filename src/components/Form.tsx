import { useReducer } from "react"
import Controller from "./Controller"
function reducer(state: any, action: any) {
  switch (action.type) {
    case "INCREMENT_AGE": {
      return {
        name: state.name,
        age: state.age + 1,
      }
    }
    case "DECREMENT_AGE": {
      return {
        name: state.name,
        age: state.age - 1,
      }
    }
    case "RESET_AGE": {
      return {
        name: state.name,
        age: 0,
      }
    }
    case "CHANGE_NAME": {
      return {
        name: action.nextName,
        age: state.age,
      }
    }
    default:
      return {
        name: state.name,
        state: state.age,
      }
  }
}
const Form = () => {
  const [state, dispatch] = useReducer(reducer, {
    age: 42,
    name: "Noman Dhoni",
  })
  const handleAgeIncrement = () => {
    dispatch({ type: "INCREMENT_AGE" })
  }
  const handleAgeDecrement = () => {
    dispatch({ type: "DECREMENT_AGE" })
  }
  const handleAgeReset = () => {
    dispatch({ type: "RESET_AGE" })
  }
  const handleNameChange = (e) => {
    dispatch({ type: "CHANGE_NAME", nextName: e.target.value })
  }
  return (
    <>
      <h1>
        {state.age} of {state.name} years
      </h1>
      <input value={state.name} onChange={handleNameChange} />
      <button onClick={handleAgeIncrement}>Increment</button>
      <button onClick={handleAgeDecrement}>Decrement</button>
      <button onClick={handleAgeReset}>Reset</button>
    </>
  )
}

export default Form
