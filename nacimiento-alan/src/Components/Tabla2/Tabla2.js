import React from "react";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
  Paper,
  Table
} from "@material-ui/core";

const Tabla2 = () => {
  return (
    <TableContainer>
      <Paper variant="outlined">
        <Box px="50px" py="20px">
          <Typography variant="h6" color="primary">
            Tu Playlist
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Nombre</TableCell>
                <TableCell align="center">Artista</TableCell>
                <TableCell align="center">Álbum</TableCell>
                <TableCell align="center">Duración</TableCell>
                <TableCell align="center">Agregar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <Box flexDirection="row" justifyContent="center" p={5}>
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
          </Table>   
        </Box>
      </Paper>
    </TableContainer>
  );
};

export default Tabla2;
