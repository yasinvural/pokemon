import React, { useEffect, useState } from "react";
import { Card, Progress } from "antd";
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
      setImg(sprites.front_default);
      setTypes(types);
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
      <div className="horizontal-line" />
      <div className="types-container">
        {types.map(type => (
          <div className="types-container__type" key={type.type.name}>
            {type.type.name}
          </div>
        ))}
      </div>
      <div className="horizontal-line" />
      <div className="stats-container">
        {stats.map(stat => (
          <div key={stat.stat.name} className="stats-container__stats">
            <div className="stats-container__stats__name">{stat.stat.name}</div>
            <div className="stats-container__stats__progress">
              <Progress percent={stat.base_stat} showInfo={false} />
              <span>{stat.base_stat}%</span>
            </div>
            <div className="stats-container__stats__percentage">
              {stat.base_stat}%
            </div>
          </div>
        ))}
      </div>
      <div className="horizontal-line" />
      <div className="moves-container">
        {moves.map(move => (
          <div key={move.move.name} className="moves-container__move">
            {move.move.name}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PokemonDetail;
