import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { useParams } from "react-router-dom";
import { baseService } from "../../services/BaseService";

const PokemonDetail = () => {
  const [img, setImg] = useState("");
  const [types, setTypes] = useState([]);
  const [stats, setStats] = useState([]);
  const [moves, setMoves] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function fetchPokemonDetails() {
      const result = await baseService.get(`pokemon/${params.name}`);
      const { sprites, stats, moves, types } = result.data;
      setTypes(types);
      setImg(sprites.front_default);
      setStats(stats);
      setMoves(moves.slice(0, 5));
    }
    fetchPokemonDetails();
  }, [params.name]);

  return (
    <Card className="pokemon-detail-container">
      <div className="pokemon-detail-container__img-container">
        <img src={img} alt={params.name} />
      </div>
      <div className="pokemon-detail-container__name">{params.name}</div>
      <div className="types-container">
        {types.map(type => (
          <div className="types-container__type" key={type.type.name}>
            {type.type.name}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PokemonDetail;
