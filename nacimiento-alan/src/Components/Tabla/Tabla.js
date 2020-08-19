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

const Tabla = () => {
  return (
    <TableContainer>
      <Paper variant="outlined">
        <Box px="50px" py="20px">
          <Typography variant="h6" color="primary">
            Resultados
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">Nombre</TableCell>
                <TableCell align="center">Artista</TableCell>
                <TableCell align="center">Álbum</TableCell>
                <TableCell align="center">Duración</TableCell>
                <TableCell align="center">Agregar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow >
                <Box textAlign="center" p={2}>
                  <Typography variant="h6" color="error">
                    No hay resultados: utiliza la barra de búsqueda para encontrar
                    canciones
                  </Typography>
                </Box>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Paper>
    </TableContainer>
  );
};

export default Tabla;
