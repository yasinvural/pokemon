import React from "react";
import { Progress } from "antd";

const PokemonStats = ({ stats }) => {
  return (
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
  );
};

export default PokemonStats;
