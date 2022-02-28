import * as React from "react";
import "antd/dist/antd.css";
import leagueTables from "../../../api/data/leagueTables.json";
import leagueStats from "../../../api/data/leagueStats.json";

class LeagueCard extends React.Component {
  constructor(props) {
    super(props);
    this.leagueIndex = 0;
    this.leagueTable = "";
    this.leagueScorers = "";
    this.leagueAssits = "";
  }

  setLeagueIndex = () => {
    if (this.props.leagueFilter === "premier_league") {
      this.leagueIndex = 0;
    } else if (this.props.leagueFilter === "bundesliga") {
      this.leagueIndex = 1;
    } else if (this.props.leagueFilter === "la_liga") {
      this.leagueIndex = 2;
    } else if (this.props.leagueFilter === "serie_a") {
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

  render() {
    return (
      <div className="league-card-main">
        {this.setLeagueIndex()}
        {this.setData()}
      </div>
    );
  }
}
export default LeagueCard;
