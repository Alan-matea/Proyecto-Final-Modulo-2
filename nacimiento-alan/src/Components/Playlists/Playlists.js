import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
  Paper,
  InputBase,
  IconButton,
} from "@material-ui/core";



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
      <Box mb={-3} m={5}>
        <TableContainer>
          <Paper variant="outlined">
            <Box px="50px" py="20px">
              <Typography variant="h6" color="primary">
                Resultados
              </Typography>

              <TableHead>
                <TableRow>
                  <TableCell align="left">
                    Nombre
                  </TableCell>
                  <TableCell align="center">Artista</TableCell>
                  <TableCell align="center">Álbum</TableCell>
                  <TableCell align="center">Duración</TableCell>
                  <TableCell align="center">
                    Agregar
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                    <Box textAlign="center" p={2}>
                  <Typography variant="h6" color="error">
                    No hay resultados: utiliza la barra de búsqueda para
                    encontrar canciones
                  </Typography>
                  </Box>
                </TableRow>
              </TableBody>
            </Box>
          </Paper>
        </TableContainer>
      </Box>
      <Box mb={3} m={5}>
        <TableContainer>
          <Paper variant="outlined">
            <Box px="50px" py="20px">
            <Typography variant="h6" color="primary">
                Tu Playlist
              </Typography>
              <TableHead>
              <TableRow>
                <TableCell align="left">
                  Nombre
                </TableCell>
                <TableCell align="center">Artista</TableCell>
                <TableCell align="center">Álbum</TableCell>
                <TableCell align="center">Duración</TableCell>
                <TableCell align="center">
                  Agregar
                </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <Box mx="auto" p={5} >
                  <Paper variant="outlined">
                    <Box textAlign="center" p={3}>
                    <Typography variant="body1" color="error">
                          UPS!, TU PLAYLIST AÚN ESTÁ VACIA
                        </Typography>
                        <Typography variant="body1" color="error">
                          Comienza a agregar canciones
                        </Typography>
                    </Box>
                  </Paper>
                </Box>
              </TableBody>
            </Box>
          </Paper>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Playlists;