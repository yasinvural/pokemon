import { createContext, useContext } from "react";

export const PokemonContext = createContext();
export const usePokemonValue = () => useContext(PokemonContext);
