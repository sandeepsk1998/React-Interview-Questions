import React,{memo} from 'react'

function ChildComponent(props) {
console.log("Child renders")

  return (
    <div>
      <div>
       <h1> This is Child Component : {props.counter} </h1>
      </div>
    </div>
  )
}

export default memo(ChildComponent)
