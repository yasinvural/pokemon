import React from "react";

const PokemonTypes = ({ types }) => {
  return (
    <>
      <h4>TYPE</h4>
      <div className="types-container">
        {types.map(type => (
          <div className="types-container__type" key={type.type.name}>
            {type.type.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default PokemonTypes;
