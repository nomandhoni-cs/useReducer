import React, { createContext, useReducer } from "react"
const CountContext = createContext()
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const RESET = "RESET"
const createActions = (dispatch) => ({
  increment: (value) => dispatch({ type: INCREMENT, payload: value || 1 }),
  decrement: (value) => dispatch({ type: DECREMENT, payload: value || 1 }),
  reset: () => dispatch({ type: RESET }),
})

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT: {
      return state + action.payload
    }
    case DECREMENT: {
      return state - action.payload
    }
    case RESET: {
      return 0
    }
    default:
      return state
  }
}

const CountProvider = (props) => {
  const [count, dispatch] = useReducer(reducer, 0)
  const actions = createActions(dispatch)
  return (
    <CountContext.Provider value={{ count, actions }}>
      {props.children}
    </CountContext.Provider>
  )
}
export { CountProvider, CountContext }
