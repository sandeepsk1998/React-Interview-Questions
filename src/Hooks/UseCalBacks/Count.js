import React,{memo} from 'react'

function Count( props ) {
    console.log(`Rendering ${props.text}`)

  return (
    <div>
      {props.text} - {props.count}
    </div>
  )
}

export default memo(Count)
