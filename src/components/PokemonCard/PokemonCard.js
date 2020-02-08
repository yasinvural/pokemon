import React from "react";
import { Card } from "antd";
import { useHistory } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  const history = useHistory();

  const gotoDetailPage = () => {
    history.push(`/${pokemon.name}`);
  };

  return (
    <Card className="pokemon-card" onClick={gotoDetailPage}>
      <div className="pokemon-card__name">{pokemon.name}</div>
    </Card>
  );
};

export default PokemonCard;
