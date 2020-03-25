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
    width: "95%",
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
    marginBottom: "0",
    fontWeight: 500
  }
})

function MessageColumn({ messages, label, priority, clearMessage }) {
  const classes = useStyles()
  return (
    <>
      <h3 className={classes.label}>
        {capitalizeFirstLetter(label)} Type {priority}
      </h3>
      <p className={classes.count}>Count: {messages.length}</p>
      <Grid container spacing={0} className={classes.column}>
        {messages.map(({ message: content, id }, i) => (
          <Grid key={i} item>
            <SnackbarContent
              className={`${label}Message ${classes.message} ${classes[label]}`}
              message={content}
              action={
                <Button
                  className="clearButton"
                  size="small"
                  onClick={e => {
                    clearMessage(id, priority)
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

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default MessageColumn
