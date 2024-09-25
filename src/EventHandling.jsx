import React from "react";

const EventHandling = () => {

  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <p>Number {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default EventHandling;
