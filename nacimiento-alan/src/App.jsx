import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import Linkss from "./Components/Linkss/Linkss";
import Playlists from "./Components/Playlists/Playlists";
import ErrorLogin from "./Components/ErrorLogin/ErrorLogin";
import PlaylistsCreator from "./Components/PlaylistsCreator/PlaylistsCreator";

function App() {
  return (
    <div>
      <Navbar />
      <ErrorLogin />
    
     
    </div>
  );
}

export default App;
