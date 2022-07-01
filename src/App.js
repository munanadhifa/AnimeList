import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AnimeList from "./animeList";
import AnimeDetail from "./AnimeDetail";
import Appbar from "./Appbar";

function App() {
  return (
    <Router>
      <Appbar />
      <Switch>
        <Route path="/" exact component={AnimeList} />
        <Route path="/animes/:id" children={<AnimeDetail />} />
      </Switch>
    </Router>
  );
}

export default App;
