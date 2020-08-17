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

import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';

import ThumbDownAltRoundedIcon from '@material-ui/icons/ThumbDownAltRounded';

import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';






import Icon from '@material-ui/core/Icon';




  

 
  





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
                  <TableCell align="left">Nombre</TableCell>
                  <TableCell align="center">Artista</TableCell>
                  <TableCell align="center">Álbum</TableCell>
                  <TableCell align="center">Duración</TableCell>
                  <TableCell align="center">Agregar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  
                  
                  <TableCell align="left">Nombre</TableCell>
                  <TableCell align="center">Artista</TableCell>
                  <TableCell align="center">Álbum</TableCell>
                  <TableCell align="center">Duración</TableCell>
                  <TableCell align="center"><AddCircleRoundedIcon color="secondary" /></TableCell>
                
                
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
                  <TableCell align="left">Nombre</TableCell>
                  <TableCell align="center">Artista</TableCell>
                  <TableCell align="center">Duración</TableCell>
                  <TableCell align="center">Cant.Votos</TableCell>
                  <TableCell align="center">Votar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                
                  
                    
              <TableRow>
                  <TableCell align="left">Nombre</TableCell>
                  <TableCell align="center">Artista</TableCell>
                  <TableCell align="center">Álbum</TableCell>
                  <TableCell align="center">Duración</TableCell>
                  <TableCell align="center">Agregar</TableCell>
            </TableRow>



            <TableRow>
                  <TableCell align="left">Nombre</TableCell>
                  <TableCell align="center">Artista</TableCell>
                  <TableCell align="center">Álbum</TableCell>
                  <TableCell align="center">Duración</TableCell>
                  <TableCell align="center">Agregar</TableCell>
         </TableRow>
         
         <TableRow>
                  <TableCell align="left">Nombre</TableCell>
                  <TableCell align="center">Artista</TableCell>
                  <TableCell align="center">Álbum</TableCell>
                  <TableCell align="center">Duración</TableCell>
                  <TableCell align="center">Agregar</TableCell>     
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
