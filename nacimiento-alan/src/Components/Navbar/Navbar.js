import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LogoMatea from "../../Logo/LogoMatea.png";
import "./styles.css";
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    

  },
  app: {
    height:"80px"
  }


}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.app}>
        <Toolbar variant="regular" className="Items-position">
          <img src={LogoMatea} alt="LogoMatea" className="LogoMatea" />
          <Typography variant="h5">
            Mateify
          </Typography>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            className={classes.small}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
