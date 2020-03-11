import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Api from '../api'
import MessageGrid from './message-grid'
import ErrorSnackbar from './error-snackbar'

class MessageList extends React.PureComponent {
    constructor(...args) {
        super(...args)
        this.state = {
            messages: [],
            showErrorSnackbar: false
        }
    }

    api = new Api({
        messageCallback: (message) => {
            this.messageCallback(message)
        },
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
            messages: [
                ...messages.slice(),
                message,
            ],
        }, () => {
            // Included to support initial direction. Please remove upon completion
            //console.log(messages)
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

    clearMessages = () =>  {
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
        const isApiStarted = this.api.isStarted()
        return (
                <>
                <AppBar >
                <Typography variant="h6">
                Help.com Coding Challenge
            </ Typography>
                </ AppBar>
                <ErrorSnackbar open={this.state.showErrorSnackbar} handleClose={this.closeErrorSnackbar}/>
                <Button
            variant="contained"
            onClick={this.toggleApi}
                >
                {isApiStarted ? 'Stop Messages' : 'Start Messages'}
            </Button>
                <Button
            variant="contained"
            onClick={this.clearMessages}
                >
                Clear
            </ Button>
                <MessageGrid messages = {this.state.messages} clearMessage={this.clearMessage} />
                </>
        )
    }
}

export default MessageList
