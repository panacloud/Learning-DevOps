import React from "react"

export default function Name(props) {
    const context = props.pageContext;
    console.log("PAGE CONTEXT: " + JSON.stringify(context, null, 4))
  return (
      <div>Hello {context.firstName} {context.lastName}</div>
  )
}