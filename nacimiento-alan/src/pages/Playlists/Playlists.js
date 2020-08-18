import React from "react";
import { Box } from "@material-ui/core";
import Search from "../../Components/Search/Search";
import Tabla from "../../Components/Tabla/Tabla";
import Tabla2 from "../../Components/Tabla2/Tabla2";

const Playlists = () => {
  return (
    <Box>
      <Search />

      <Box mb={-3} m={5}>
        <Tabla />
      </Box>
      <Box mb={3} m={5}>
        <Tabla2 />
      </Box>
    </Box>
  );
};

export default Playlists;
