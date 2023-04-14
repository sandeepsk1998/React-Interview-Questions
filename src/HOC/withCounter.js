import React, { useState } from "react";

const withCounter = (WrappedComponent) => {
  function NewComponent() {
    const [counter, setCounter] = useState(0);

    const increament = () => {
      setCounter(counter + 1);
    };
    return (
      <div>
        <WrappedComponent counter={counter} increament={increament}  />
      </div>
    );
  }

  return NewComponent;
};

export default withCounter;

//// both components from App.js
{/* <ClickCounter />
        <HoverCounter /> */}
