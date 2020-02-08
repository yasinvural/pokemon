import React, { useState, useEffect } from "react";
import { baseService } from "../../services/BaseService";

import { Tabs } from "antd";

const { TabPane } = Tabs;

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    async function fetchPokemonList() {
      const result = await baseService.get("pokemon");
      console.log(result);
    }
    fetchPokemonList();
  }, []);

  return (
    <>
      <Tabs>
        <TabPane tab="Pokemon List" key="pokemonList">
          <div>pokemon list</div>
        </TabPane>
        <TabPane tab="My List" key="myList">
          <div>my list </div>
        </TabPane>
      </Tabs>
    </>
  );
};

export default PokemonList;
