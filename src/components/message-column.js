import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';

function MessageColumn ({messages, label, priority, clearMessage}) {
        return (
                <>
                <h3>{label} Type {priority}</h3>
                    <p>Count: {messages.length}</p>
                {messages.map(({message: content, id}, i) => (
                        <Grid key={i} xs={10} item>
                        <SnackbarContent message={content} action={(
                                <Button size="small" onClick={e => {clearMessage(id); e.preventDefault()}}>
                            Clear
                                                                   </Button>)
                                                                  } />
                        </Grid>
                ))}
            
                </>
        )
}

export default MessageColumn
