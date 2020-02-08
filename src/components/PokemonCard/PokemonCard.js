import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div>
      <div>{pokemon.name}</div>
    </div>
  );
};

export default PokemonCard;
