import React, { createContext, useReducer, ReactNode, Dispatch } from "react"

interface CountState {
  count: number
}

interface CountActions {
  increment: (value?: number) => void
  decrement: (value?: number) => void
  reset: () => void
}

type CountContextType = CountState & { actions: CountActions }

const CountContext = createContext<CountContextType | undefined>(undefined)

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const RESET = "RESET"

interface IncrementAction {
  type: typeof INCREMENT
  payload: number
}

interface DecrementAction {
  type: typeof DECREMENT
  payload: number
}

interface ResetAction {
  type: typeof RESET
}

type CountAction = IncrementAction | DecrementAction | ResetAction

const createActions = (dispatch: Dispatch<CountAction>): CountActions => ({
  increment: (value?: number) =>
    dispatch({ type: INCREMENT, payload: value || 1 }),
  decrement: (value?: number) =>
    dispatch({ type: DECREMENT, payload: value || 1 }),
  reset: () => dispatch({ type: RESET }),
})

const reducer = (state: number, action: CountAction): number => {
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

interface CountProviderProps {
  children: ReactNode
}

const CountProvider: React.FC<CountProviderProps> = ({
  children,
}: CountProviderProps) => {
  const [count, dispatch] = useReducer(reducer, 0)
  const actions = createActions(dispatch)

  return (
    <CountContext.Provider value={{ count, actions }}>
      {children}
    </CountContext.Provider>
  )
}

export { CountProvider, CountContext }
