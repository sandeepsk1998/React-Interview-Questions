import React  from 'react'
import withCounter from './withCounter'

function ClickCounter(props) {
    

  return (
    <div>
      <button onClick={props.increament}> Clicked {props.counter} times</button>
    </div>
  )
}

export default withCounter(ClickCounter)
