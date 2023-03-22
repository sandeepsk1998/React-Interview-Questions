import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  const increament = () => {
    setCount(count + 1);
  };

    if (count > 66) {
        throw new Error("Something went wrong")
    }
    
  return (
    <div>
          <p>Your {props.first}count is {count}</p>
           <button onClick={increament}>Increament </button>
    </div>
  );
}

export default Counter;
