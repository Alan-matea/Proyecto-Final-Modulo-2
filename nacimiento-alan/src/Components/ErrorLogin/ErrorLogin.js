import React from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Box, Typography, FormControl, Paper, Grid } from "@material-ui/core";

const ErrorLogin = () => {
  return (
    <Box m={20} p={1} textAlign="center">
      <Paper variant="outlined" elevation={3}>
      
        <LockOutlinedIcon color="secondary" />
        
        <Typography variant="h4" color="initial">
          Mmm... algo no salió bien
        </Typography>
        <FormControl>
          <Typography variant="h6" color="initial">
            Debes estar autenticado para acceder a esta página
          </Typography>
        </FormControl>
      </Paper>
    </Box>
  );
};

export default ErrorLogin;
