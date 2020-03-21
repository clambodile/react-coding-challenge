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
      errorMessages: [],
      warningMessages: [],
      infoMessages: [],
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
    const { errorMessages, warningMessages, infoMessages } = this.state
    if (message.priority === 1) {
      this.triggerErrorSnackbar()
    }
    this.setState(state => {
      if (message.priority === 1) {
        return {
          errorMessages: [message, ...state.errorMessages]
        }
      } else if (message.priority === 2) {
        return {
          warningMessages: [message, ...state.warningMessages]
        }
      } else {
        return {
          infoMessages: [message, ...state.infoMessages]
        }
      }
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
      errorMessages: [],
      warningMessages: [],
      infoMessages: []
    })
  }

  clearMessage = (id, priority) => {
    this.setState(state => {
      if (priority === 1) {
        return {
          errorMessages: state.errorMessages.filter(
            message => message.id !== id
          )
        }
      } else if (priority === 2) {
        return {
          warningMessages: state.warningMessages.filter(
            message => message.id !== id
          )
        }
      } else {
        return {
          infoMessages: state.infoMessages.filter(message => message.id !== id)
        }
      }
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
          errorMessages={this.state.errorMessages}
          warningMessages={this.state.warningMessages}
          infoMessages={this.state.infoMessages}
          clearMessage={this.clearMessage}
        />
      </>
    )
  }
}

export default MessageList
