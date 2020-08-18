import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Box, Paper, InputBase, IconButton } from "@material-ui/core";

const Search = () => {
  return (
    <Box width={500} my={4} mx="auto">
      <Paper variant="outlined">
        <IconButton type="submit">
          <SearchIcon />
        </IconButton>
        <InputBase placeholder="Buscar" />
      </Paper>
    </Box>
  );
};

export default Search;
