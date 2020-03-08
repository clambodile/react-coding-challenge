import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import ErrorColumn from './error-column'
import WarningColumn from './warning-column'
import InfoColumn from './info-column'

class MessageGrid extends React.PureComponent {
    constructor(...args) {
        super(...args)
    }

    isError = message => message.priority === 1
    isWarning = message => message.priority === 2
    isInfo = message => message.priority === 3


    render() {
        const messages = this.props.messages
        const errors = messages.filter(this.isError)
        const warnings = messages.filter(this.isWarning)
        const info = messages.filter(this.isInfo)

        return (
            <div>
                <Grid container spacing={2}>
                <ErrorColumn messages={errors} />
                <WarningColumn messages={warnings} />
                <InfoColumn messages={info} />
                </Grid>
            </div>
        )
    }
}

export default MessageGrid
