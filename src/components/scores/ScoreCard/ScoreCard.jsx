import * as React from "react";
import "antd/dist/antd.css";
import "./ScoreCard.scss";

class ScoreCard extends React.Component {
  cardInfo;

  constructor(props) {
    super(props);
    this.cardInfo = this.props.cardInfo;
  }

  loadArrowIcon = () => {
    if (this.cardInfo.home_score === "") {
      return (
        <div className="game-status ant-col ant-col-5">
          {this.cardInfo.game_status}
        </div>
      );
    } else {
      return <div className="arrow-icon ant-col ant-col-2">▶</div>;
    }
  };

  render() {
    return (
      <div className="score-card-main">
        <h3>{this.props.loadLeagueName}</h3>
        <div className="team-info team-info-top ant-row">
          <img
            className="team-logo ant-col ant-col-3"
            alt={this.cardInfo.home_team_name + " logo"}
            src={this.cardInfo.home_team_logo}
          />
          <div className="team-name ant-col ant-col-15">
            {this.cardInfo.home_team_name}
          </div>
          {this.loadArrowIcon()}
          <div className="score ant-col ant-col-1">
            {this.cardInfo.home_score}
          </div>
        </div>

        <div className="team-info team-info-bottom ant-row">
          <img
            className="team-logo ant-col ant-col-3"
            alt={this.cardInfo.away_team_name + " logo"}
            src={this.cardInfo.away_team_logo}
          />
          <div className="team-name ant-col ant-col-15">
            {this.cardInfo.away_team_name}
          </div>
          {this.loadArrowIcon()}
          <div className="score ant-col ant-col-1">
            {this.cardInfo.away_score}
          </div>
        </div>
      </div>
    );
  }
}
export default ScoreCard;
