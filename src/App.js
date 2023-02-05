import "./App.css";
import ScoreItem from "./components/ScoreItem";

function App() {
  const dataTeam = [
    {
      name: "Team 1",
      score: "50",
    },
    {
      name: "Team 2",
      score: "40",
    },
    {
      name: "Team 3",
      score: "30",
    },
    {
      name: "Team 4",
      score: "20",
    },
    {
      name: "Team 5",
      score: "10",
    },
  ];
  return (
    <div className="scoreboard">
      <div className="main-container">
        <div className="score-heading">
          <div className="text-bg"></div>
          <div className="text-wrap">
            <div className="text-container">
              <img src="/images/star-medal.png" alt="medal" />
              <svg viewBox="0 0 850 200">
                <symbol id="s-text">
                  <text text-anchor="middle" x="50%" y="50%" dy=".35em">
                    SCOREBOARD
                  </text>
                </symbol>
                <use className="text" xlinkHref="#s-text" />
                <use className="text" xlinkHref="#s-text" />
                <use className="text" xlinkHref="#s-text" />
                <use className="text" xlinkHref="#s-text" />
                <use className="text" xlinkHref="#s-text" />
              </svg>
              <img
                src="/images/star-medal.png"
                alt="medal"
                style={{ marginLeft: "10px" }}
              />
            </div>
          </div>
        </div>
        <div className="score-label">
          <div className="score-label-item label-rank">
            <div className="score-label-bg"></div>
            <span>Rank</span>
          </div>
          <div className="score-label-item label-name">
            <div className="score-label-bg"></div>
            <span>Name</span>
          </div>
          <div className="score-label-item label-score">
            <div className="score-label-bg"></div>
            <span>Score</span>
          </div>
        </div>
        <div className="score-items">
          {dataTeam.map((item, index) => (
            <ScoreItem {...item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
