import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  drawer: {
    width: 400,
  },
  drawerPaper: {
    padding: 16,
    width: 400,
    background: "transparent",
    backdropFilter: "blur(5px)",
    color: "white",
  },
  paper: {
    backgroundColor: "initial",
    color: "white",
    marginBottom: 8
  }
})

export default useStyles;