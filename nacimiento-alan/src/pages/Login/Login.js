import React, { useState } from "react";
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

import { makeStyles } from "@material-ui/core/styles";

import Avatar from "@material-ui/core/Avatar";

import { pink } from "@material-ui/core/colors";

import DateUserJson './base-de-datos/userData.json';

export const FormValidation = (props) => {
    [const valorDelInput, setValorDelInput] = useState ("");
    [const valorDelInputcontraseña, setValorDelInputcontraseña] = useState ("");}

const mostrarTextoIngesado = {evento} => {
  setValorDelInput(evento.target.value);
};
const mostrarTextoIngesadocontraseña = {evento} => {
  setValorDelInput(evento.target.value);
};

const chequeaUsuarios ={ element } => {
  if (element.email === valorDelInput && element.password === 
    valorDelInputcontraseña) {
    return true;
    
  } else {
    return false;
  }
};

  //OnClick evento
const validaUsuario = () => {
  const FilterUser = DateUserJson.filter(chequeaUsuarios);
  console.log(FilterUser);
  if (FilterUser.length > 0){
    alert("usuarui correcto");
  }else {
    alert("no");
  }
}




















const useStyle = makeStyles((theme) => ({
  margin: {
    margin: "15px",
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    width: "60px",
    height: "60px",
    left: "100px",
    top: "10px",
    margin: "15px",
    

  },
}));

const Login = () => {
  const classes = useStyle();
  return (
    <Box
      color="primary.contrastText"
      p={2}
      textAlign="center"
      className={classes.margin}
    >
      <Paper variant="outlined" elevation={3}>
        <Avatar className={classes.pink}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography variant="h6" color="initial" paragraph>
          Ingresar
        </Typography>
        <FormControl>
          <TextField
            className={classes.margin}
            id="outlined-search"
            label="Correo electrónico"
            type="email"
            variant="outlined"
          />
          <TextField
            className={classes.margin}
            id="outlined-search"
            label="Contraseña"
            type="password"
            variant="outlined"
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

          <Typography variant="body1" color="error" className={classes.margin}>
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
      </Paper>
    </Box>
  );
};

export default Login;
