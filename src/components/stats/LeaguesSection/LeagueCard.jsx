import * as React from "react";
import "antd/dist/antd.css";
import leagueTables from "../../../api/data/leagueTables.json";
import leagueStats from "../../../api/data/leagueStats.json";
import "./LeagueSection.scss";

class LeagueCard extends React.Component {
  constructor(props) {
    super(props);
    this.leagueIndex = 0;
    this.leagueTable = "";
    this.leagueScorers = "";
    this.leagueAssits = "";
  }

  setLeagueIndex = () => {
    if (this.props.leagueFilter === "Premier League") {
      this.leagueIndex = 0;
    } else if (this.props.leagueFilter === "Bundesliga") {
      this.leagueIndex = 1;
    } else if (this.props.leagueFilter === "La Liga") {
      this.leagueIndex = 2;
    } else if (this.props.leagueFilter === "Serie A") {
      this.leagueIndex = 3;
    } else {
      this.leagueIndex = 4;
    }
  };

  setData = () => {
    this.leagueTable = leagueTables[this.leagueIndex];
    if (this.leagueIndex === 0) {
      this.leagueScorers = leagueStats.premier_league_scorers;
      this.leagueAssits = leagueStats.premier_league_assists;
    } else if (this.leagueIndex === 1) {
      this.leagueScorers = leagueStats.bundesliga_scorers;
      this.leagueAssits = leagueStats.bundesliga_assists;
    } else if (this.leagueIndex === 2) {
      this.leagueScorers = leagueStats.la_liga_scorers;
      this.leagueAssits = leagueStats.la_liga_assists;
    } else if (this.leagueIndex === 3) {
      this.leagueScorers = leagueStats.serie_a_scorers;
      this.leagueAssits = leagueStats.serie_a_assists;
    } else {
      this.leagueScorers = leagueStats.ligue_1_scorers;
      this.leagueAssits = leagueStats.ligue_1_assists;
    }
  };

  createLeagueTable = (teamObject) => {
    return (
      <tr key={teamObject.rank}>
        <td>{teamObject.rank}</td>
        <td className="team-name">
          <img
            alt="team logo"
            className="team-logo"
            src={teamObject.team_logo}
          />
          <span className="team-name-container">{teamObject.team_name}</span>
        </td>
        <td>{teamObject.played}</td>
        <td>{teamObject.won}</td>
        <td>{teamObject.drawn}</td>
        <td>{teamObject.lost}</td>
        <td>{teamObject.goals_for}</td>
        <td>{teamObject.goals_against}</td>
        <td>{teamObject.goal_difference}</td>
        <td>{teamObject.points}</td>
      </tr>
    );
  };

  render() {
    return (
      <div className="league-card-main">
        {this.setLeagueIndex()}
        {this.setData()}
        <h2>{this.props.leagueFilter} Table</h2>
        <table className="league-table">
          <tbody>
            <tr>
              <td>Rank</td>
              <td>Team</td>
              <td>P</td>
              <td>W</td>
              <td>D</td>
              <td>L</td>
              <td>F</td>
              <td>A</td>
              <td>GD</td>
              <td>PTS</td>
            </tr>
            {this.leagueTable.map(this.createLeagueTable)}
          </tbody>
        </table>
      </div>
    );
  }
}
export default LeagueCard;
