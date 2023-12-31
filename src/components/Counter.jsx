import { useState } from "react";

const Counter = () => {
  const [likes, setLikes] = useState(0);

  const increment = () => setLikes(likes + 1);

  const decrement = () => setLikes(likes - 1);

  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
