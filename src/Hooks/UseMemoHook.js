import React, { useState,useMemo } from "react";

function UseMemoHook() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const increamentOne = () => {
    setCounter1(counter1 + 1);
  };

  const increamentTwo = () => {
    setCounter2(counter2 + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return counter1 % 2 === 0
},[counter1])

   


  return (
    <div>
      <div>
        <p>Count -{counter1} <span>{isEven ? 'Even' : 'Odd'}</span> </p>
        
        <button onClick={increamentOne}>Increament One</button>
      </div>
      <div>
        <p>Count -{counter2} </p>
        <button onClick={increamentTwo}>Increament Two</button>
      </div>
    </div>
  );
}

export default UseMemoHook;
