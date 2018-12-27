import React from "react"
import {render} from "react-dom"

const App = React.memo(() => {
  return <div>Hi</div>
})

render(
  <App/>,
  window.document.getElementById("root")
)
