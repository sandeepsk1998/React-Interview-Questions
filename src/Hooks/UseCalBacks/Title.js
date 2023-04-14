import React,{memo} from 'react'

function Title() {

console.log("Rendering Title")

  return (
    <div>
      <h2>USeCall Back Hook</h2>
    </div>
  )
}

export default memo(Title)
