import React from "react"
import ReactDOM from "react-dom"
import "@/index.css"
import { Provider } from "react-redux"
import App from "@/App"
import "open-props/style"
import "open-props/normalize"
import "open-props/sizes"
import "open-props/colors"
import "open-props/orange"
import "open-props/gradients"
import { store } from "@/store"

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root"),
)
