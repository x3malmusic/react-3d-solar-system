import React, { useContext } from "react";
import { Drawer, Button, Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { Context } from "../../context";


const Sidebar = () => {
  const classes = useStyles();
  const { activePlanet, chosenPlanetInfo, setActivePlanet } = useContext(Context)

  return(
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={!!activePlanet}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      {chosenPlanetInfo &&
      <Paper className={classes.paper}>
        {chosenPlanetInfo.distance && <Typography variant="subtitle2">Distance from the Sun: {chosenPlanetInfo.distance} AU</Typography>}
        <Typography variant="subtitle2" gutterBottom>Length Of Year: {chosenPlanetInfo.year}</Typography>
        <Typography>{chosenPlanetInfo.desc}</Typography>
      </Paper>
      }
      <Button onClick={() => setActivePlanet(null)} variant="contained" color="primary">
        Back to free mode
      </Button>
    </Drawer>
  )
}

export default Sidebar;