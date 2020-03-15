import React from 'react'
import Grid from '@material-ui/core/Grid'
import ErrorColumn from './error-column'
import WarningColumn from './warning-column'
import InfoColumn from './info-column'

class MessageGrid extends React.PureComponent {

    isError = message => message.priority === 1
    isWarning = message => message.priority === 2
    isInfo = message => message.priority === 3


    render() {
        const messages = this.props.messages
        const errors = messages.filter(this.isError).reverse()
        const warnings = messages.filter(this.isWarning).reverse()
        const info = messages.filter(this.isInfo).reverse()

        return (
            <>
                <Grid item xs={12} >
                <Grid container spacing={6} justify="center">
                <Grid xs={3} item>
                <ErrorColumn messages={errors} priority={1} clearMessage={this.props.clearMessage}/>
                </Grid>
                <Grid xs={3} item>
                <WarningColumn messages={warnings} priority={2} clearMessage={this.props.clearMessage}/>
                </Grid>
                <Grid xs={3} item>
                <InfoColumn messages={info} priority={3} clearMessage={this.props.clearMessage} />
                </Grid>
                </Grid>
                </Grid>
            </>
        )
    }
}

export default MessageGrid
