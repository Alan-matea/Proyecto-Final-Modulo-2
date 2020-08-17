import React from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Box, Typography, Paper } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import Avatar from "@material-ui/core/Avatar";

import { pink } from "@material-ui/core/colors";

const useStyle = makeStyles((theme) => ({
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    width: "80px",
    height: "80px",
    left: "20px",
    top: "50px",
  },
}));

const ErrorLogin = () => {
  const classes = useStyle();
  return (
    <Box m={20} p={1} textAlign="center">
      <Paper variant="outlined" elevation={3}>
        <Box pt={10} pb={10} pl={5} pr={5}>
          <Avatar className={classes.pink}>
            <LockOutlinedIcon />
          </Avatar>

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
