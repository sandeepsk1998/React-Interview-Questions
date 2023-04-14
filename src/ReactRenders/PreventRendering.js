import React,{useState} from 'react'
import ChildComponent from '../ReactRenders/ChildComponent'


function PreventRendering() {
const [count,setCount] =  useState(0);
console.log("I am Parent")



  return (

    <div>

        <h2>Count -{count}</h2>
        <button onClick={()=> setCount(count+1)}> Click Me !</button>

        <ChildComponent counter={count} />
      
    </div>
  )
}

export default PreventRendering
