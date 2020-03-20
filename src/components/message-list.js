import React from "react"
import Api from "../api"
import Header from "./header"
import MessageGrid from "./message-grid"
import ErrorSnackbar from "./error-snackbar"
import Controls from "./controls"

class MessageList extends React.PureComponent {
  constructor(...args) {
    super(...args)
    this.state = {
      messages: [],
      showErrorSnackbar: false
    }
  }

  api = new Api({
    messageCallback: message => {
      this.messageCallback(message)
    }
  })

  componentDidMount() {
    this.api.start()
  }

  messageCallback(message) {
    const { messages } = this.state
    if (message.priority === 1) {
      this.triggerErrorSnackbar()
    }
    this.setState({
      messages: [...messages.slice(), message]
    })
  }

  triggerErrorSnackbar = () => {
    clearTimeout(this.state.prevTimeout)
    this.setState({
      showErrorSnackbar: true,
      prevTimeout: setTimeout(this.closeErrorSnackbar, 2000)
    })
  }

  closeErrorSnackbar = () => {
    if (this.state.showErrorSnackbar) {
      this.setState({
        showErrorSnackbar: false
      })
    }
  }

  clearMessages = () => {
    this.setState({
      messages: []
    })
  }

  clearMessage = id => {
    this.setState({
      messages: this.state.messages.filter(message => message.id !== id)
    })
  }

  toggleApi = () => {
    const isApiStarted = this.api.isStarted()
    if (isApiStarted) {
      this.api.stop()
    } else {
      this.api.start()
    }
    this.forceUpdate()
  }

  render() {
    return (
      <>
        <Header />
        <hr />
        <ErrorSnackbar
          open={this.state.showErrorSnackbar}
          handleClose={this.closeErrorSnackbar}
        />
        <Controls
          toggleApi={this.toggleApi}
          isApiStarted={this.api.isStarted.bind(this.api)}
          clearMessages={this.clearMessages}
        />
        <MessageGrid
          messages={this.state.messages}
          clearMessage={this.clearMessage}
        />
      </>
    )
  }
}

export default MessageList
