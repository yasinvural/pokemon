import React, { useEffect, useState } from "react";
import { Card } from "antd";
import PokemonHeader from "../PokemonHeader/PokemonHeader";
import PokemonTypes from "../PokemonTypes/PokemonTypes";
import PokemonStats from "../PokemonStats/PokemonStats";
import PokemonMoves from "../PokemonMoves/PokemonMoves";
import { useParams, useHistory } from "react-router-dom";
import { baseService } from "../../services/BaseService";

const PokemonDetail = () => {
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState("");
  const [types, setTypes] = useState([]);
  const [stats, setStats] = useState([]);
  const [moves, setMoves] = useState([]);
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    async function fetchPokemonDetails() {
      const result = await baseService.get(`pokemon/${params.name}`);
      const { sprites, stats, moves, types } = result.data;
      setImg(sprites.front_default);
      setTypes(types);
      setStats(stats);
      setMoves(moves.slice(0, 5));
    }
    setLoading(true);
    fetchPokemonDetails();
    setLoading(false);
  }, [params.name]);

  const goBack = () => {
    history.push(`/`);
  };

  return (
    <Card className="pokemon-detail-container" loading={loading}>
      <div
        className="pokemon-detail-container__go-back-button"
        onClick={goBack}
      >
        Go to list
      </div>
      <PokemonHeader img={img} name={params.name} />
      <div className="horizontal-line" />
      <PokemonTypes types={types} />
      <div className="horizontal-line" />
      <PokemonStats stats={stats} />
      <div className="horizontal-line" />
      <PokemonMoves moves={moves} />
    </Card>
  );
};

export default PokemonDetail;
