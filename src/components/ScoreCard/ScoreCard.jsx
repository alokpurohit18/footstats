import * as React from "react";
import "antd/dist/antd.css";
import "./ScoreCard.scss";

class ScoreCard extends React.Component {
  cardInfo;

  constructor(props) {
    super(props);
    this.cardInfo = this.props.cardInfo;
  }

  render() {
    return (
      <div className="score-card-main">
        <div className="team-info ant-row">
          <img
            className="team_logo ant-col ant-col-3"
            alt={this.cardInfo.home_team_name + " logo"}
            src={this.cardInfo.home_team_logo}
          />
          <div className="team_name ant-col ant-col-15">
            {this.cardInfo.home_team_name}
          </div>
          <div className="arrow-icon ant-col ant-col-2">▶</div>
          <div className="score ant-col ant-col-2">
            {this.cardInfo.home_score}
          </div>
        </div>

        <div className="team-info ant-row">
          <img
            className="team_logo ant-col ant-col-3"
            alt={this.cardInfo.away_team_name + " logo"}
            src={this.cardInfo.away_team_logo}
          />
          <div className="team_name ant-col ant-col-15">
            {this.cardInfo.away_team_name}
          </div>
          <div className="arrow-icon ant-col ant-col-2">▶</div>
          <div className="score ant-col ant-col-2">
            {this.cardInfo.away_score}
          </div>
        </div>
      </div>
    );
  }
}
export default ScoreCard;
