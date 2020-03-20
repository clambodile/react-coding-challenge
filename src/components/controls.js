import React from "react"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  button: {
    backgroundColor: "#1DDEB7",
    "&:hover": {
      backgroundColor: "#88FCA3"
    }
  }
})

function Controls({ toggleApi, isApiStarted, clearMessages }) {
  const classes = useStyles()
  return (
    <Grid spacing={2} justify="center" container>
      <Grid item xs={1}>
        <Button
          className={classes.button}
          variant="contained"
          onClick={toggleApi}
        >
          {isApiStarted() ? "Stop" : "Start"}
        </Button>
      </Grid>
      <Grid item xs={1}>
        <Button
          className={classes.button}
          variant="contained"
          onClick={clearMessages}
        >
          Clear
        </Button>
      </Grid>
    </Grid>
  )
}

export default Controls
