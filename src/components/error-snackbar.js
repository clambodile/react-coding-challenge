import React from "react"
import Snackbar from "@material-ui/core/Snackbar"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  snackBar: {
    marginTop: "-20px",
    backgroundColor: "#F56236",
    color: "black"
  }
})

export default function ErrorSnackbar(props) {
  const classes = useStyles()

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        id="errorSnackbar"
        ContentProps={{
          classes: {
            root: classes.snackBar
          }
        }}
        open={props.open}
        onClose={props.handleClose}
        message="Error"
        action={
          <>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={props.handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </div>
  )
}
