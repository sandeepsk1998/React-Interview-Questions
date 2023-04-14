import React  from "react";
import withCounter from "./withCounter";

function HoverCounter(props) {

  return (
    <div>
      <h2 onMouseOver={props.increament}>
        Hovered {props.counter} Times
      </h2>
    </div>
  );
}

export default withCounter(HoverCounter);
