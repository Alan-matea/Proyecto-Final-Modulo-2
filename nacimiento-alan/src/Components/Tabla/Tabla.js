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
  Table,
} from "@material-ui/core";

const Tabla = (props) => {
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
                <TableCell align="center">Nombre</TableCell>
                <TableCell align="center">Artista</TableCell>
                <TableCell align="center">Álbum</TableCell>
                <TableCell align="center">Duración</TableCell>
                <TableCell align="center">Agregar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.listaFiltrada.map((song) => (
                <TableRow >
                  <TableCell align="left">{song.name}</TableCell>
                  <TableCell align="left">{song.artist}</TableCell>
                  <TableCell align="left">{song.duration}</TableCell>
                  <TableCell align="left"> {song.duration} </TableCell>
                  <TableCell align="left"> Agregar </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Paper>
    </TableContainer>
  );
};

export default Tabla;
