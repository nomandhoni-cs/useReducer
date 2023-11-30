import { useReducer } from "react"
function reducer(state: any, action: any) {
  switch (action.type) {
    case "INCREMENT_AGE": {
      return {
        name: state.name,
        age: state.age + 1,
      }
    }
  }
  throw Error("Unknown Action")
}
const Form = () => {
  const [state, dispatch] = useReducer(reducer, {
    age: 42,
    name: "Noman Dhoni",
  })
  const handleAgeIncrement = () => {
    dispatch({ type: "INCREMENT_AGE" })
  }
  return (
    <>
      <h1>Form</h1>
      {state.age}
      <button onClick={handleAgeIncrement}>Increment</button>
    </>
  )
}

export default Form
