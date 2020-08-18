import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Playlists from "./pages/Playlists/Playlists";
import { BrowserRouter as Router, Switch, } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Router path="/" exact>
            <Login />
          </Router>

          <Router path="/playlists">
            <Playlists />
       
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
