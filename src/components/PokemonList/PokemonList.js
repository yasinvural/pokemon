import React, { useState, useEffect } from "react";
import { baseService } from "../../services/BaseService";
import PokemonCard from "../PokemonCard/PokemonCard";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const PokemonList = () => {
  const LIMIT = 20;
  const [noMoreRequest, setNoMoreRequest] = useState(false);
  const [offset, setOffset] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    async function fetchPokemonList() {
      const result = await baseService.get(
        `pokemon?offset=${offset}&limit=${LIMIT}`
      );
      setPokemonList(pokemonList => [...pokemonList, ...result.data.results]);
      setNoMoreRequest(result.data.next ? false : true);
    }
    if (!noMoreRequest) fetchPokemonList();
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
      setOffset(offset => offset + LIMIT);
      return;
    }
  };

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
