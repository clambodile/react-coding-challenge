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
        const errors = messages.filter(this.isError)
        const warnings = messages.filter(this.isWarning)
        const info = messages.filter(this.isInfo)

        return (
            <div>
                <Grid item xs={12} >
                <Grid container spacing={2} >
                <Grid xs={4} item>
                <ErrorColumn messages={errors} priority={1}/>
                </Grid>
                <Grid xs={4} item>
                <WarningColumn messages={warnings} priority={2}/>
                </Grid>
                <Grid xs={4} item>
                <InfoColumn messages={info} priority={3}/>
                </Grid>
                </Grid>
                </Grid>
            </div>
        )
    }
}

export default MessageGrid
