import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Box, Paper, InputBase, IconButton } from "@material-ui/core";

const Search = (props) => {
  return (
    <Box width={500} my={4} mx="auto">
      <Paper variant="outlined" aria-label="search">
        <IconButton type="submit">
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder="Buscar"
          value={props.inputValue}
          onChange={props.handleInputChange}
          onKeyPress={props.handleInputKeyPress}
        />
      </Paper>
    </Box>
  );
};

export default Search;
