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

import {makeStyles} from "@material-ui/core/styles";


const useStyle = makeStyles ({
  margin:{
    margin:'15px',
    
  }
})

const Login = () => {
  const classes = useStyle()
  return (
    <Box color="primary.contrastText" p={2} textAlign="center" className={classes.margin}>
      <Paper variant="outlined" elevation={3}>
        <LockOutlinedIcon color="secondary" fontSize="large" className={classes.margin}/>
        <Typography variant="h6" color="initial" paragraph>
          Ingresar
        </Typography>
        <FormControl>
          <TextField className={classes.margin}
            id="outlined-search"
            label="Correo electrónico"
            type="email"
            variant="outlined"
          />
          <TextField className={classes.margin}
            id="outlined-search"
            label="Contraseña"
            type="password"
            variant="outlined"
          />
          <Button variant="contained" color="secondary" size="large" className={classes.margin}>
            COMENZAR A CREAR PLAYLISTS
          </Button>

          <Link className="link" href="#" className={classes.margin}>
            ¿HAS OLVIDADO LA CONTRASEÑA?
          </Link>

          <Divider className={classes.margin}/>

          <Typography variant="body1" color="error" className={classes.margin}>
            ¿NO TIENES CUENTA?
          </Typography>
          <Box>
            <Button variant="outlined" color="primary" size="large" className={classes.margin}>
              REGISTRATE
            </Button>
          </Box>
        </FormControl>
      </Paper>
    </Box>
  );
};

export default Login;
