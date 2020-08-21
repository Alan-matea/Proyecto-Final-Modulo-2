import React, { useState } from "react";
import { Box } from "@material-ui/core";
import Search from "../../Components/Search/Search";
import Tabla from "../../Components/Tabla/Tabla";
import Tabla2 from "../../Components/Tabla2/Tabla2";
import canciones from "../../base-de-datos/songData.json";
const Playlists = () => {
  const [inputValue, setInputValue] = useState("");
  const [listaFiltrada, setListaFiltrada] = useState([]);

  const handleInputChange = (e) => {
    console.log("Se ejecuta handleInputChange y actualiza el inputValue");
    setInputValue(e.target.value);
  };

  const filtrarCanciones = (cancion) => {
    console.log("Se ejecuta filtrarCanciones");
    console.log("Valor del input: ");
    console.log(inputValue);
    console.log("Canción: ");
    console.log(cancion);

    if (cancion.name.includes(inputValue)) {
      return true;
    } else {
      return false;
    }
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("Se ejecuta el handleInputKeyPress");

      // primero me quedo con los resultyados filtrados
      const resultados = canciones.filter(filtrarCanciones);
      console.log("Tenemos el array con los resultados filtrados:");
      console.log(resultados);

      // despues actualizo el estado con esos resultados pora poder mostrarlos en el render
      setListaFiltrada(resultados);
      console.log("Se actualiza el estado de las canciones a mostrar");
    }
  };

  const handleAgregarClick = (e, cancion) => {
    console.log("Se ejecuta el handleAgregarClick");
    console.log("Me llega la cancion");
    console.log(cancion);
    // TODO actualizar la playlist de abajo (que en este ejemplo no esta pero en el de ustedes si)
  };

  return (
    <Box>
      <Search
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleInputKeyPress={handleInputKeyPress}
      />
      <Box mb={-3} m={5}>
        <Tabla listaFiltrada={listaFiltrada} />
      </Box>
      <Box mb={3} m={5}>
        <Tabla2 />
      </Box>
    </Box>

    // <ul>
    //   {
    //     // recorro la lista filtrada que tengo en el estado
    //     listaFiltrada.map((cancion) => (
    //       <div key={cancion.uuid}>
    //         <li>
    //           Cancion: {cancion.name}
    //           Artista: {cancion.artist.name}
    //           Duración: {cancion.duration}
    //         </li>
    //         <button onClick={(e) => handleAgregarClick(e, cancion)}>
    //           Agregar a lista
    //         </button>
    //       </div>
    //     ))
    //   }
    //   </ul>
  );
};

export default Playlists;
