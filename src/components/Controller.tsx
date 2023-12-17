import React, { useContext } from "react"
import { CountContext } from "../provider/count-provider"

const Controller = () => {
  const { actions } = useContext(CountContext)
  console.log(actions)
  return (
    <>
      <button onClick={() => actions.increment()}>Increase Count</button>
      <button onClick={() => actions.decrement()}>Decrease Count</button>
      <button onClick={() => actions.reset()}>Reset</button>
    </>
  )
}

export default Controller
