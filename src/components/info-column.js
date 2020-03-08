import React from 'react'
import MessageColumn from './message-column'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

function InfoColumn ({messages: messages}) {
    return (
            <MessageColumn
        messages={messages}
        label="Info" />
    )
}

export default InfoColumn
