import React, { useState } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Box, TextField, Button, Link, Divider, Typography, FormControl, Paper} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { pink } from "@material-ui/core/colors";

const useStyle = makeStyles((theme) => ({
  margin: {
    marginBottom: "50px",
  },

  form: {
    width: "60%",
  },

  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    width: "55px",
    height: "55px",
    top: "10px",
    margin: "15px",
  },

  large: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },

}));

const Login = () => {
  const classes = useStyle();
  return (
    <Box
      color="primary.contrastText"
      textAlign="center"
      py={4}
      className={classes.margin}
    >
      <Paper variant="outlined" elevation={3}>
        <Box py={4}>
          <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
            <Avatar className={classes.pink}>
              <LockOutlinedIcon className={classes.large} />
            </Avatar>
          </Box>
          <Typography variant="h4" color="initial" className={classes.margin}>
            Ingresar
          </Typography>
          <FormControl className={classes.form}>
            <TextField
              className={classes.margin}
              id="outlined-search"
              label="Correo electrónico"
              type="email"
              variant="outlined"
              fullWidth
            />
            <TextField
              className={classes.margin}
              id="outlined-search"
              label="Contraseña"
              type="password"
              variant="outlined"
              fullWidth
            />
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className={classes.margin}
            >
              COMENZAR A CREAR PLAYLISTS
            </Button>
            <Link className="link" href="#" className={classes.margin}>
              ¿HAS OLVIDADO LA CONTRASEÑA?
            </Link>
            <Divider className={classes.margin} />
            <Typography variant="h6" color="error" paragraph >
              ¿NO TIENES CUENTA?
            </Typography>
            <Box>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                className={classes.margin}
              >
                REGISTRATE
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;