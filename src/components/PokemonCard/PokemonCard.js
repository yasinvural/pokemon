import React from "react";
import { Card } from "antd";

const PokemonCard = ({ pokemon }) => {
  return (
    <Card className="pokemon-card">
      <div className="pokemon-card__name">{pokemon.name}</div>
    </Card>
  );
};

export default PokemonCard;
