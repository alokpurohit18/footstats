import * as React from "react";
import "antd/dist/antd.css";
import leagueTables from "../../../api/data/leagueTables.json";
import leagueStats from "../../../api/data/leagueStats.json";
import "./LeagueSection.scss";

class LeagueCard extends React.Component {
  constructor(props) {
    super(props);
    this.leagueIndex = 0;
    this.leagueColor = "premier-league";
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
      this.leagueColor = "premier-league";
    } else if (this.leagueIndex === 1) {
      this.leagueScorers = leagueStats.bundesliga_scorers;
      this.leagueAssits = leagueStats.bundesliga_assists;
      this.leagueColor = "bundesliga";
    } else if (this.leagueIndex === 2) {
      this.leagueScorers = leagueStats.la_liga_scorers;
      this.leagueAssits = leagueStats.la_liga_assists;
      this.leagueColor = "la-liga";
    } else if (this.leagueIndex === 3) {
      this.leagueScorers = leagueStats.serie_a_scorers;
      this.leagueAssits = leagueStats.serie_a_assists;
      this.leagueColor = "serie-a";
    } else {
      this.leagueScorers = leagueStats.ligue_1_scorers;
      this.leagueAssits = leagueStats.ligue_1_assists;
      this.leagueColor = "ligue-1";
    }
  };

  createLeagueTable = (teamObject) => {
    return (
      <tr key={teamObject.rank}>
        <td className={this.leagueColor}>{teamObject.rank}</td>
        <td className={"team-name " + this.leagueColor}>
          <img
            alt="team logo"
            className="team-logo"
            src={teamObject.team_logo}
          />
          <span className="team-name-container">{teamObject.team_name}</span>
        </td>
        <td className={this.leagueColor}>{teamObject.played}</td>
        <td className={this.leagueColor}>{teamObject.won}</td>
        <td className={this.leagueColor}>{teamObject.drawn}</td>
        <td className={this.leagueColor}>{teamObject.lost}</td>
        <td className={this.leagueColor}>{teamObject.goals_for}</td>
        <td className={this.leagueColor}>{teamObject.goals_against}</td>
        <td className={this.leagueColor}>{teamObject.goal_difference}</td>
        <td className={this.leagueColor}>{teamObject.points}</td>
      </tr>
    );
  };

  createStatRow = (playerObject) => {
    return (
      <tr key={playerObject.rank}>
        <td className={this.leagueColor}>{playerObject.rank}</td>
        <td className={this.leagueColor}>{playerObject.name}</td>
        <td className={this.leagueColor}>{playerObject.club}</td>
        <td className={this.leagueColor}>{playerObject.matches}</td>
        <td className={this.leagueColor}>{playerObject.value}</td>
      </tr>
    );
  };

  createStatsTable = (tableHeading, valueLabel, statArray) => {
    return (
      <div className="stats-table-container">
        <h2>{tableHeading}</h2>
        <table className={"stats-table " + this.leagueColor}>
          <tbody>
            <tr className="table-header">
              <td className={this.leagueColor}>Rank</td>
              <td className={this.leagueColor}>Name</td>
              <td className={this.leagueColor}>Team</td>
              <td className={this.leagueColor}>P</td>
              <td className={this.leagueColor}>{valueLabel}</td>
            </tr>
            {statArray.map(this.createStatRow)}
          </tbody>
        </table>
      </div>
    );
  };

  render() {
    return (
      <div className="league-card-main">
        {this.setLeagueIndex()}
        {this.setData()}
        <div className="league-table-container">
          <h2>{this.props.leagueFilter} Table</h2>
          <table className={"league-table " + this.leagueColor}>
            <tbody>
              <tr className="table-header">
                <td className={this.leagueColor}>Rank</td>
                <td className={this.leagueColor}>Team</td>
                <td className={this.leagueColor}>P</td>
                <td className={this.leagueColor}>W</td>
                <td className={this.leagueColor}>D</td>
                <td className={this.leagueColor}>L</td>
                <td className={this.leagueColor}>F</td>
                <td className={this.leagueColor}>A</td>
                <td className={this.leagueColor}>GD</td>
                <td className={this.leagueColor}>PTS</td>
              </tr>
              {this.leagueTable.map(this.createLeagueTable)}
            </tbody>
          </table>
        </div>
        <div className="stats-tables-container">
          {this.createStatsTable("Top Scorers", "G", this.leagueScorers)}
          {this.createStatsTable("Top Assists", "A", this.leagueAssits)}
        </div>
      </div>
    );
  }
}
export default LeagueCard;
