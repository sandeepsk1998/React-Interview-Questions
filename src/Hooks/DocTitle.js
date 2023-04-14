import React, {useState } from "react";
import useDocumentHook from "./useDocumentHook";

function DocTitle() {
    const [count, setCount] = useState(0);
   useDocumentHook(count);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count is {count}</button>
    </div>
  );
}

export default DocTitle;
