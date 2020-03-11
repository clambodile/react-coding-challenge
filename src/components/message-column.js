import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

function MessageColumn ({messages, label, priority, clearMessage}) {
        return (
                <div>
                <h3>{label} Type {priority}</h3>
                    <p>Count: {messages.length}</p>
                {messages.map(({message: content, id}, i) => (
                        <Grid key={i} xs={10} item>
                        <Paper  >
                        {content}
                        <a onClick={e => {console.log("hi"); clearMessage(id); e.preventDefault()}}>
                        Clear
                    </a>
                        </ Paper>
                        </Grid>
                ))}
            
                </div>
        )
}

export default MessageColumn
