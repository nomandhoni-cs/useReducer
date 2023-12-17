import { useContext } from "react"
import { CountContext } from "../provider/count-provider"
import Controller from "./Controller"
const Counter = () => {
  const { count } = useContext(CountContext)
  return (
    <>
      <h1>useReducer Practice practice from Stack Learner</h1>
      <h1>Current count is {count}</h1>
      <Controller />
    </>
  )
}

export default Counter
