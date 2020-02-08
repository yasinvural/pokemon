import React from "react";
import { Card } from "antd";
import { useHistory } from "react-router-dom";
import { likeEmpty, likeFilled } from "../../svg/svg";

const PokemonCard = ({ pokemon, handleSetMyPokemonList }) => {
  const history = useHistory();

  const gotoDetailPage = () => {
    history.push(`/${pokemon.name}`);
  };

  const handleLikeClick = e => {
    e.stopPropagation();
    handleSetMyPokemonList(pokemon);
  };

  return (
    <Card className="pokemon-card" onClick={gotoDetailPage}>
      <div className="pokemon-card__name">{pokemon.name}</div>
      <div className="pokemon-card__svg" onClick={handleLikeClick}>
        {likeEmpty()}
      </div>
    </Card>
  );
};

export default PokemonCard;
