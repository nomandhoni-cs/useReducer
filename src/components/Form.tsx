import { useReducer } from "react"
function reducer(state: any, action: any) {
  switch (action.type) {
    case 'INCREMENT_AGE': {
      return {
        name: state.name,
        age: state.age + 1
      };
    }
  }
  throw Error('Unknown Action');
}
const Form = () => {
  const [state, dispatch] = useReducer(reducer, { name: 'Taylor', age: 42 })
  const handleAgeIncrement = () => {
    dispatch({ type: 'INCREMENT_AGE' })
  }
  return (<>
    <div>Form</div>
    {state}
    <button onClick={handleAgeIncrement}>Increment</button>
  </>
  )
}

export default Form