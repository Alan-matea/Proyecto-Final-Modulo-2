import React from "react";

import Button from "@material-ui/core/Button";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import Navbar from "./Components/Navbar";

import Textfield from "@material-ui/core/TextField";

function App() {
  return (
    <div>
      <Navbar />

      <div>
        <Textfield value="" placeholder="Correo electrónico" type="email" />
      </div>

      <div>
        <Textfield value="" placeholder="Contraseña" type="password" />
      </div>

      <LockOutlinedIcon></LockOutlinedIcon>

      <Button variant="contained" color="secondary">
        COMENZAR A CREAR PLAYLISTS
      </Button>

      <Button variant="outlined" color="secondary">
        REGISTRATE
      </Button>
    </div>
  );
}

export default App;
