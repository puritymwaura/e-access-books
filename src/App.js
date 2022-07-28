import React from "react";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import "./components/style.css";
import Welcome from "./components/Welcome";
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/home">
          <Welcome />
        </Route>
        <Route exact path="/books">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
