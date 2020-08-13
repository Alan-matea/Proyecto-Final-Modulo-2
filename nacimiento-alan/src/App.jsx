import React from 'react';

import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


import Navbar from './Components/Navbar';

import Textfield from '@material-ui/core/TextField';

function App() {
  return (
    <div>
      <Navbar />
      
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
