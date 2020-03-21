import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  header: {
    margin: "10px 0 10px 30px",
    padding: "9px",
    fontWeight: 500
  }
})

function Header() {
  const styles = useStyles()
    return (<>
            <h4 className={styles.header}>Help.com Coding Challenge</h4>
            <hr />
            </>)
}

export default Header
