import {createTheme, withStyles} from '@material-ui/core/styles'

export const theme = createTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "4vh",
        color: "white",
        backgroundColor: "black"
      },
      arrow: {
        fontSize: "4vh",
        color: "black"
      }
    }
  }
});