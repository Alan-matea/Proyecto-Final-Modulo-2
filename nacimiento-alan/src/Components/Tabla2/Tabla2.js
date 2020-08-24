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
  Fab,
  
} from "@material-ui/core";

import Icon from '@material-ui/core/Icon';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
const Tabla2 = (props) => {
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
                <TableCell align="center">Duración</TableCell>
                <TableCell align="center">Cant. Votos</TableCell>
                <TableCell align="center">Votar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {props.myPlaylist.map((song) => (
                        <TableRow key={song.uuid}>
                        <TableCell align="left">{song.name}</TableCell>
                        <TableCell align="left">{song.album}</TableCell>
                        <TableCell align="left">{song.duration}</TableCell>
                        <TableCell align="left"> {song.count} </TableCell>
                        <TableCell align="left"><Fab onClick = {(e) => props.handleThumbsUpClick(e, song.uuid)}> <ThumbUpIcon/> </Fab></TableCell>
                        <TableCell align="left"><Fab onClick = {(e) => props.handleThumbsDownClick(e, song.uuid)}> <ThumbDownIcon/> </Fab ></TableCell>
                        </TableRow>
          ))}


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
