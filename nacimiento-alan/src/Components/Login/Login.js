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
  Paper,
} from "@material-ui/core";

const Login = () => {
  return (
    <Box color="primary.contrastText" p={2} textAlign="center">
      <Paper variant="outlined" elevation={3}>
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
      </Paper>
    </Box>
  );
};

export default Login;
