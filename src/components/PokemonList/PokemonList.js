import React, { useState, useEffect } from "react";
import { baseService } from "../../services/BaseService";
import PokemonCard from "../PokemonCard/PokemonCard";
import { usePokemonValue } from "../../context/PokemonContext";

import { Tabs } from "antd";

const { TabPane } = Tabs;

const PokemonList = () => {
  const { pokemons, dispatch } = usePokemonValue();
  const {
    loading,
    limit,
    noMoreRequest,
    offset,
    pokemonList,
    myList
  } = pokemons;

  useEffect(() => {
    async function fetchPokemonList() {
      const result = await baseService.get(
        `pokemon?offset=${offset}&limit=${limit}`
      );
      dispatch({
        type: "set_pokemonList",
        payload: [...result.data.results]
      });
      dispatch({
        type: "set_noMoreRequest",
        payload: result.data.next ? false : true
      });
    }
    if (!noMoreRequest) fetchPokemonList();

    return () => {
      dispatch({
        type: "clear_pokemonList"
      });
    };
  }, [offset]);

  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  });

  const handleOnScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight;
    const scrolledToBottom =
      Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    if (scrolledToBottom) {
      dispatch({
        type: "set_offset",
        payload: offset + limit
      });
      return;
    }
  };

  const handleSetMyPokemonList = myPokemon => {
    if (myList.findIndex(pokemon => pokemon.name === myPokemon.name) === -1) {
      dispatch({
        type: "set_myList",
        payload: [...myList, myPokemon]
      });
    } else {
      const list = myList.filter(pokemon => pokemon.name !== myPokemon.name);
      dispatch({
        type: "set_myList",
        payload: [...list]
      });
    }
  };

  return (
    <>
      <Tabs>
        <TabPane tab="Pokemon List" key="pokemonList">
          <div className="pokemon-list-container">
            {pokemonList.map(pokemon => (
              <PokemonCard
                key={pokemon.name}
                pokemon={pokemon}
                handleSetMyPokemonList={handleSetMyPokemonList}
              />
            ))}
          </div>
        </TabPane>
        <TabPane tab="My List" key="myList">
          <div className="pokemon-list-container">
            {myList.map(pokemon => (
              <PokemonCard
                key={pokemon.name}
                pokemon={pokemon}
                handleSetMyPokemonList={handleSetMyPokemonList}
              />
            ))}
          </div>
        </TabPane>
      </Tabs>
    </>
  );
};

export default PokemonList;
