import React from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Box, TextField, Button, Link, Divider, } from "@material-ui/core";



const Login = () => {
  return (
    <Box color="primary.contrastText" p={2} textAlign="center">
      <TextField value="" placeholder="Correo electrónico" type="email" />

      <div>
        <TextField value="" placeholder="Contraseña" type="password" />
      </div>

      <LockOutlinedIcon></LockOutlinedIcon>

      <Button variant="contained" color="secondary">
        COMENZAR A CREAR PLAYLISTS
      </Button>

      <Link className="link" href="#">
      ¿HAS OLVIDADO LA CONTRASEÑA?
      </Link>

      <Divider />
      
      <Link className="link" href="#">
      ¿NO TIENES CUENTA?
      </Link>

      <Button variant="outlined" color="secondary">
        REGISTRATE
      </Button>
    </Box>
  );
};

export default Login;
