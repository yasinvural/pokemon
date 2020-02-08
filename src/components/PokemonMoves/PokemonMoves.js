import React from "react";

const PokemonMoves = ({ moves }) => {
  return (
    <>
      <h4>MOVES</h4>
      <div className="moves-container">
        {moves.map(move => (
          <div key={move.move.name} className="moves-container__move">
            {move.move.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default PokemonMoves;
