import React from "react";
import "./style.scss";

const ScoreItem = ({ index, name, score }) => {
  return (
    <div className="score-item-container">
      <div className="score-item score-item--rank">
        <img src="/images/trophy.gif" alt="" className="trophy-img" />
        <div className="score-item-bg"></div>
        <span>#{index + 1}</span>
      </div>
      <div className="score-item score-item--name">
        <div className="score-item-bg"></div>
        <span>{name}</span>
      </div>
      <div className="score-item score-item--score">
        <div className="score-item-bg"></div>
        <span>{score}</span>
      </div>
    </div>
  );
};

export default ScoreItem;
