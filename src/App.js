import React, { useReducer } from "react";
import { Route } from "react-router-dom";
import PokemonList from "./components/PokemonList/PokemonList";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";
import { PokemonContext } from "./context/PokemonContext";
import { reducer, initialState } from "./reducer/PokemonReducer";

const App = () => {
  const [pokemons, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <PokemonContext.Provider value={{ pokemons, dispatch }}>
        <Route exact path="/pokemon" component={PokemonList} />
        <Route exact path="/pokemon/:name" component={PokemonDetail} />
      </PokemonContext.Provider>
    </>
  );
};

export default App;
