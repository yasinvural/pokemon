import React from "react";

const PokemonHeader = ({ img, name }) => {
  return (
    <div className="pokemon-header">
      <div className="pokemon-header__img-container">
        <img src={img} alt={name} />
      </div>
      <div className="pokemon-header__name">{name}</div>
    </div>
  );
};

export default PokemonHeader;
