import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Typography, Paper, InputBase, IconButton } from "@material-ui/core";



const Playlists = () => {
  return (
    <Box>
      <Box width={500} my={4} mx="auto">
        <Paper variant="outlined">
          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
          <InputBase placeholder="Buscar" />
        </Paper>
      </Box>
      <Box mb={-3} m={4}>
        <TableContainer>
          <Paper variant="outlined">
            <Box px="50px" py="20px">
              <Typography variant="h6" color="primary">
                Resultados
              </Typography>

              <TableHead>
                <TableRow>
                  <TableCell align="left" padding="none">
                    Nombre
                  </TableCell>
                  <TableCell align="center">Artista</TableCell>
                  <TableCell align="center">Álbum</TableCell>
                  <TableCell align="center">Duración</TableCell>
                  <TableCell align="center" padding="none">
                    Agregar
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <Typography variant="h6" color="error">
                    No hay resultados: utiliza la barra de búsqueda para
                    encontrar canciones
                  </Typography>
                </TableRow>
              </TableBody>
            </Box>
          </Paper>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Playlists;