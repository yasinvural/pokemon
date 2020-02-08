import React from "react";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const params = useParams();

  return <>Pokemon detail will be here. {params.name}</>;
};

export default PokemonDetail;
