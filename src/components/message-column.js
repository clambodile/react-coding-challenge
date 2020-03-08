import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

function MessageColumn ({messages: messages, label: label}) {
    console.log(label)
        console.log(messages)
        return (
                <div>
                <Grid container spacing={2}>
                {messages.map(({message: content}, i) => (
                        <Grid key={i} item>
                        <Paper  >
                        {content}
                        </ Paper>
                        </Grid>
                ))}
            
            </Grid>
                </div>
        )
}

export default MessageColumn
