import React from 'react'

function Section(props) {
    const className = "section " + props.className
  return (
    <div className = {className} style = {{
        "backgroundColor" : props.backgroundColor,
        "height" : props.height,
        "width": props.width,
        "flexDirection" : props.isVertical ? "column" : "row",
        }}>{props.content}</div>
  )
}

export default Section