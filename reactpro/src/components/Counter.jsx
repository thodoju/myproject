import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(0);
  const [decrementBy, setDecrementBy] = useState(0);

  function increment() {
    setCount(count + incrementBy);
  }
  function decrement() {
    setCount(count - incrementBy);
  }

  function increaseIncrement() {
    setIncrementBy(incrementBy + 1);
  }

  function decreaseDecrement() {
    setDecrementBy(decrementBy - 1);
  }
  return (
    <div>
      <h1>Count Value is:{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h1>we are increasing te value by:{incrementBy}</h1>
      <button onClick={increaseIncrement}>Increase increment</button>

      <h1>we are decreasing te value by:{decrementBy}</h1>
      <button onClick={decreaseDecrement}>decrease decrement</button>
    </div>
  );
}
