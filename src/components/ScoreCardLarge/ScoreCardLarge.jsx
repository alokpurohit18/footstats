import * as React from "react";
import "antd/dist/antd.css";
import LeagueConversion from "../../leagueConversion.json";

class ScoreCardLarge extends React.Component {
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

  loadLeagueName = () => {
    if (LeagueConversion[0][this.cardInfo.league] === undefined) {
      let half_league_name = "";
      let final_league_name = "";
      if (this.cardInfo.league.charAt(4) === "1") {
        half_league_name = " League";
        final_league_name =
          this.cardInfo.league.split(".")[0] + half_league_name;
      } else if (this.cardInfo.league.charAt(4) === "2") {
        half_league_name = " League 2";
        final_league_name =
          this.cardInfo.league.split(".")[0] + half_league_name;
      } else if (this.cardInfo.league.charAt(4) === "3") {
        half_league_name = " League 3";
        final_league_name =
          this.cardInfo.league.split(".")[0] + half_league_name;
      } else if (this.cardInfo.league.charAt(4) === "4") {
        half_league_name = " League 4";
        final_league_name =
          this.cardInfo.league.split(".")[0] + half_league_name;
      } else {
        half_league_name = this.cardInfo.league.split(".")[1];
        half_league_name =
          " " +
          half_league_name.charAt(0).toUpperCase() +
          half_league_name.slice(1);
        final_league_name =
          this.cardInfo.league.split(".")[0] + half_league_name;
      }

      final_league_name =
        final_league_name.charAt(0).toUpperCase() + final_league_name.slice(1);
      return final_league_name;
    } else {
      return LeagueConversion[0][this.cardInfo.league];
    }
  };

  render() {
    return (
      <div className="score-card-main">
        <h3>{this.loadLeagueName()}</h3>
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
export default ScoreCardLarge;
