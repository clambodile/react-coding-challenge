import React from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import SnackbarContent from "@material-ui/core/SnackbarContent"

const useStyles = makeStyles({
  column: {
    width: "100%"
  },
  message: {
    width: "100%",
    margin: "0 5px 5px 0",
    boxSizing: "border-box",
    color: "black"
  },
  count: {
    margin: "3px 0 10px 0"
  },
  error: {
    backgroundColor: "#F56236"
  },
  warning: {
    backgroundColor: "#FCE788"
  },
  info: {
    backgroundColor: "#88FCA3"
  },
  label: {
    textTransform: "capitalize",
    marginBottom: "0",
    fontWeight: 500
  }
})

function MessageColumn({ messages, label, priority, clearMessage }) {
  const classes = useStyles()
  return (
    <>
      <h3 className={classes.label}>
        {label} Type {priority}
      </h3>
      <p className={classes.count}>Count: {messages.length}</p>
      <Grid container className={classes.column}>
        {messages.map(({ message: content, id }, i) => (
          <Grid key={i} xs={12} item>
            <SnackbarContent
              className={`${classes.message} ${classes[label]}`}
              message={content}
              action={
                <Button
                  size="small"
                  onClick={e => {
                    clearMessage(id)
                    e.preventDefault()
                  }}
                >
                  Clear
                </Button>
              }
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default MessageColumn
