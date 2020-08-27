import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Playlists from "./pages/Playlists/Playlists";
import { BrowserRouter as Router, Switch, } from "react-router-dom";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Router path="/" exact>
            <Container maxWidth="md">
              <Login />
            </Container>
          </Router>
          <Router path="/playlists">
            <Playlists />
          </Router>
        </Switch>
    </Router>
  );
}

export default App;
