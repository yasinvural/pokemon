import React from "react";
import { Card } from "antd";
import { useHistory } from "react-router-dom";
import { likeEmpty, likeFilled } from "../../svg/svg";

const PokemonCard = ({
  pokemon,
  handleSetMyPokemonList,
  loading,
  otherList
}) => {
  const history = useHistory();

  const gotoDetailPage = () => {
    history.push(`/${pokemon.name}`);
  };

  const handleLikeClick = e => {
    e.stopPropagation();
    handleSetMyPokemonList(pokemon);
  };

  const renderSvg = () => {
    if (otherList.findIndex(x => x.name === pokemon.name) === -1) {
      return likeEmpty();
    } else {
      return likeFilled();
    }
  };

  return (
    <Card className="pokemon-card" onClick={gotoDetailPage} loading={loading}>
      <div className="pokemon-card__name">{pokemon.name}</div>
      <div className="pokemon-card__svg" onClick={handleLikeClick}>
        {renderSvg()}
      </div>
    </Card>
  );
};

export default PokemonCard;
