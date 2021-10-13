import React from "react";
import { Switch, Route } from "react-router-dom";
import Pokemon from "./Pokemon";
import PokeList from "./PokeList";

export default (
  <Switch>
    <Route exact path="/" component={PokeList} />
    <Route path="/pokemon/:name" component={Pokemon} />
  </Switch>
);
