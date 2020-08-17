import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  Box,
  Paper,
  InputBase,
  IconButton,
} from "@material-ui/core";

const Playlists = () => {
  return (
    <Box>
      <Box width={500} my={4} mx="auto">
        <Paper variant="outlined">
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase placeholder="Buscar" />
        </Paper>
      </Box> 
    </Box>    
  );
};

export default Playlists;
