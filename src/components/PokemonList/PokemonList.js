import React, { useState, useEffect } from "react";
import { baseService } from "../../services/BaseService";
import PokemonCard from "../PokemonCard/PokemonCard";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const PokemonList = () => {
  const LIMIT = 20;
  const [offset, setOffset] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    async function fetchPokemonList() {
      const result = await baseService.get(
        `pokemon?offset=${offset}&limit=${LIMIT}`
      );
      setPokemonList(result.data.results);
    }
    fetchPokemonList();
  }, []);

  return (
    <>
      <Tabs>
        <TabPane tab="Pokemon List" key="pokemonList">
          <div className="pokemon-list-container">
            {pokemonList.map(pokemon => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
          </div>
        </TabPane>
        <TabPane tab="My List" key="myList">
          <div>my list </div>
        </TabPane>
      </Tabs>
    </>
  );
};

export default PokemonList;
