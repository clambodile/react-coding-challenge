import React from "react"
import ReactDOM from "react-dom"
import MessageList from "./components/message-list"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  "@global": {
    body: {
      fontFamily: "Helvetica Neue"
    }
  }
})
const App = () => {
  const styles = useStyles()
  return <MessageList className={styles} />
}

function renderApp(App) {
  ReactDOM.render(<App />, document.getElementById("root"))
}

renderApp(App)

if (module.hot) {
  module.hot.accept("./components/message-list", () => {
    renderApp(App)
  })
}
