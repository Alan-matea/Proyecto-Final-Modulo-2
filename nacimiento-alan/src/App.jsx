import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import Playlists from "./Components/Playlists/Playlists";
import ErrorLogin from "./Components/ErrorLogin/ErrorLogin";
import PlaylistsCreator from "./Components/PlaylistsCreator/PlaylistsCreator";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>

        <Router path="/" exact>
        <Login/>
        </Router>

        <Router path="/ErrorLogin">
        <ErrorLogin/>
        </Router>

        <Router path="/Playlists">
        <Playlists/>
       </Router>

        <Router path="/PlaylistsCreator">
        <PlaylistsCreator />
        </Router>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
