import React from "react";
import { Route } from "react-router-dom";
import PokemonList from "./components/PokemonList/PokemonList";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";

const App = () => {
  return (
    <>
      <Route exact path="/" component={PokemonList} />
      <Route exact path="/:name" component={PokemonDetail} />
    </>
  );
};

export default App;
