import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Api from '../api'
import MessageGrid from './message-grid'

class MessageList extends React.PureComponent {
    constructor(...args) {
        super(...args)
        this.state = {
            messages: [],
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
        this.setState({
            messages: [
                ...messages.slice(),
                message,
            ],
        }, () => {
            // Included to support initial direction. Please remove upon completion
            //console.log(messages.filter(m => m.priority === 1))
        })
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
                <div>
                <AppBar >
                <Typography variant="h6">
                Help.com Coding Challenge
            </ Typography>
                </ AppBar>
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
                </div>
        )
    }
}

export default MessageList
