import * as React from "react";
import "antd/dist/antd.css";

class ScoreCardLarge extends React.Component {
  cardInfo;

  constructor(props) {
    super(props);
    this.cardInfo = this.props.cardInfo;
  }

  loadSoccerBall = (team) => {
    if (team === "home") {
      if (
        this.cardInfo.home_scorers === "" ||
        this.cardInfo.home_scorers === " "
      ) {
        return;
      } else {
        return "⚽";
      }
    } else {
      if (this.cardInfo.away_scorers === "") {
        return;
      } else {
        return "⚽";
      }
    }
  };

  render() {
    return (
      <div className="score-card-large-main">
        <h3>{this.props.loadLeagueName}</h3>
        <div className="team-info ant-row">
          <div className="team-name team-name-left ant-col ant-col-6">
            {this.cardInfo.home_team_name}
          </div>
          <img
            className="team-logo ant-col ant-col-2"
            alt={this.cardInfo.home_team_name + " logo"}
            src={this.cardInfo.home_team_logo}
          />
          <div className="score ant-col ant-col-1">
            {this.cardInfo.home_score}
          </div>
          <div className="arrow-icon">◀</div>

          <div className="game-status ant-col ant-col-4">
            {this.cardInfo.game_status}
          </div>

          <div className="arrow-icon">▶</div>
          <div className="score ant-col ant-col-1">
            {this.cardInfo.away_score}
          </div>
          <img
            className="team-logo ant-col ant-col-2"
            alt={this.cardInfo.away_team_name + " logo"}
            src={this.cardInfo.away_team_logo}
          />
          <div className="team-name team-name-right ant-col ant-col-6">
            {this.cardInfo.away_team_name}
          </div>
        </div>
        <div className="team-scorers ant-row">
          <div className="home-team-scorers ant-col ant-col-7">
            {this.cardInfo.home_scorers}
            {this.loadSoccerBall("home")}
          </div>
          <div className="ant-col ant-col-7"></div>
          <div className="away-team-scorers ant-col ant-col-7">
            {this.loadSoccerBall("away")}
            {this.cardInfo.away_scorers}
          </div>
        </div>
        <div className="game-result-special">
          <span>{this.cardInfo.game_result}</span>
        </div>
      </div>
    );
  }
}
export default ScoreCardLarge;
