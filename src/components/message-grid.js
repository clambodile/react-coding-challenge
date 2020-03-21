import React from "react"
import Grid from "@material-ui/core/Grid"
import ErrorColumn from "./error-column"
import WarningColumn from "./warning-column"
import InfoColumn from "./info-column"

class MessageGrid extends React.PureComponent {
  render() {
    return (
      <>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid xs={3} item>
              <ErrorColumn
                messages={this.props.errorMessages}
                priority={1}
                clearMessage={this.props.clearMessage}
              />
            </Grid>
            <Grid xs={3} item>
              <WarningColumn
                messages={this.props.warningMessages}
                priority={2}
                clearMessage={this.props.clearMessage}
              />
            </Grid>
            <Grid xs={3} item>
              <InfoColumn
                messages={this.props.infoMessages}
                priority={3}
                clearMessage={this.props.clearMessage}
              />
            </Grid>
          </Grid>
        </Grid>
      </>
    )
  }
}

export default MessageGrid
