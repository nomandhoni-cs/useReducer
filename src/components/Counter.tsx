const Counter = () => {
  return (
    <>
      <h1>useReducer Practice practice from Stack Learner</h1>
      <h1>Age is {state.age}</h1>
      <button onClick={handleIncrease}>Increase Count</button>
      <button onClick={handleDecrease}>Decrease Count</button>
      <button onClick={handleTwosTable}>Reset</button>
    </>
  )
}

export default Counter
