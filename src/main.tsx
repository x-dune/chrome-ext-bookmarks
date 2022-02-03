import React from "react"
import ReactDOM from "react-dom"
import "@/index.css"
import { Provider } from "react-redux"
import App from "@/App"
import "open-props/style"
import "open-props/normalize"
import "open-props/colors-hsl"
import "bootstrap-icons/font/bootstrap-icons.css"
import "@/index.css"
import { store } from "@/store"

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root"),
)
