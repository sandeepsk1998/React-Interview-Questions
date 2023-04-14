import React, { useRef } from "react";

function UseRefHook() {
  const inputref = useRef(null);

  const handleref = () => {
    inputref.current.value = "Sandeep"
    inputref.current.focus()
  };
  return (
    <div>
      <h1>Use Refs hook</h1>
      <input type="text" refs={inputref} />
      <button onClick={handleref}>Refs Effects</button>
    </div>
  );
}

export default UseRefHook;
