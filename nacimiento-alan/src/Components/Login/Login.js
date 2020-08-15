import React from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
  Box,
  TextField,
  Button,
  Link,
  Divider,
  Typography,
  FormControl,
} from "@material-ui/core";

const Login = () => {
  return (
    <Box color="primary.contrastText" p={2} textAlign="center">
      <LockOutlinedIcon  color="secondary" />
      <Typography variant="h6" color="secondary">
        Ingresar
      </Typography>
      <FormControl>
        <TextField
          id="outlined-search"
          label="Correo electrónico"
          type="email"
          variant="outlined"
        />
        <TextField
          id="outlined-search"
          label="Contraseña"
          type="password"
          variant="outlined"
        />
        <Button variant="contained" color="secondary">
          COMENZAR A CREAR PLAYLISTS
        </Button>
        <Link className="link" href="#">
          ¿HAS OLVIDADO LA CONTRASEÑA?
        </Link>

        <Divider />

        <Typography variant="h6" color="secondary">
          ¿NO TIENES CUENTA?
        </Typography>

        <Button variant="outlined" color="secondary">
          REGISTRATE
        </Button>
      </FormControl>
    </Box>
  );
};

export default Login;
