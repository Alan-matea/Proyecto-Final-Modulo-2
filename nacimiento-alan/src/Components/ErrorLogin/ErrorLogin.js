import React from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Box, Typography, Paper, Grid } from "@material-ui/core";

const ErrorLogin = () => {
  return (
    <Box m={20} p={1} textAlign="center">
      <Paper variant="outlined" elevation={3}>
        <Box pt={10} pb={10} pl={5} pr={5}>
          <LockOutlinedIcon color="secondary" fontSize="large" />
          <Typography variant="h4" color="initial">
            Mmm... algo no salió bien
          </Typography>
          <Typography variant="h6" color="initial">
            Debes estar autenticado para acceder a esta página
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default ErrorLogin;
