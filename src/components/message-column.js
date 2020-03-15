import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const useStyles = makeStyles({
    message: {
        marginBottom: "5px",
        color: "black"
    },
    error: {
        backgroundColor: "#F56236"
    },
    warning: {
        backgroundColor: "#FCE788"
    },
    info: {
        backgroundColor: "#88FCA3"
    }
})

function MessageColumn ({messages, label, priority, clearMessage}) {
    const classes = useStyles()
    return (
            <>
            <h3>{label} Type {priority}</h3>
            <p>Count: {messages.length}</p>
            <Grid  container height="100%">
            {messages.map(({message: content, id}, i) => (
                    <Grid key={i} xs={10} item>
                    <SnackbarContent className={`${classes.message} ${classes[label.toLowerCase()]}`} message={content} action={(
                            <Button size="small" onClick={e => {clearMessage(id); e.preventDefault()}}>
                            Clear
                        </Button>)
                                                                                          } />
                    </Grid>
            ))}

        </ Grid>
            </>
    )
}

export default MessageColumn
