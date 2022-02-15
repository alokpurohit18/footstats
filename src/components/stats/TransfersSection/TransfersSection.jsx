import * as React from "react";
import "antd/dist/antd.css";
import Menu from "../../common/Menu/Menu.jsx";
import transferData from "../../../api/data/transfersData.json";

class TrasnfersSection extends React.Component {
  teamNames;
  teamKeys;
  leagues;
  options;

  constructor(props) {
    super(props);
    this.teamNames = [];
    this.teamKeys = [];
    this.options = [];
    this.leagues = [
      "premier_league",
      "bundesliga",
      "la_liga",
      "serie_a",
      "ligue_1",
    ];
    this.state = {
      teamFilter: "all",
    };
  }

  setTeams = (league_name) => {
    let teamsArray = [];

    switch (league_name) {
      case "premier_league":
        teamsArray = transferData.premier_league;
        break;
      case "bundesliga":
        teamsArray = transferData.bundesliga;
        break;
      case "la_liga":
        teamsArray = transferData.la_liga;
        break;
      case "serie_a":
        teamsArray = transferData.serie_a;
        break;
      default:
        teamsArray = transferData.ligue_1;
    }

    for (let i = 0; i < teamsArray.summer.length; i++) {
      let teamObject = teamsArray.summer[i];
      this.teamNames.push(teamObject.team.team_name);
      this.teamKeys.push(teamObject.team.team_id);
    }

    for (let i = 0; i < teamsArray.winter.length; i++) {
      let teamObject = teamsArray.winter[i];
      this.teamNames.push(teamObject.team.team_name);
      this.teamKeys.push(teamObject.team.team_id);
    }
  };

  reduceTeamNames = () => {
    this.options = [];
    this.teamNames = this.teamNames.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

    this.teamKeys = this.teamKeys.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

    for (let i = 0; i < this.teamNames.length; i++) {
      this.options.push({
        value: this.teamKeys[i],
        label: this.teamNames[i],
      });
    }
  };

  filterTeamCards = (selectedObject) => {
    this.setState({
      teamFilter: selectedObject.value,
    });
  };

  loadTransferCard = () => {
    return (
      <div>
        <h3>Ben White</h3>
      </div>
    );
  };

  /*choseScoreItems = (leagueFilter) => {
    let counter = 0;
    let start = this.cardStart;
    this.cardDetailsArray = [];
    if (leagueFilter === "all") {
      while (counter < this.cardCount) {
        this.cardDetailsArray.push(scoresData[start]);
        counter++;
        start++;
      }
    } else {
      for (let i = 0; i < scoresData.length; i++) {
        if (scoresData[i].league === leagueFilter) {
          this.cardDetailsArray.push(scoresData[i]);
        }
      }
    }
  };*/

  render() {
    return (
      <div className="transfers-section-main">
        {this.leagues.map(this.setTeams)}
        {this.reduceTeamNames()}
        <h2>Football Transfers</h2>
        <div className="menu-container">
          <Menu
            options={this.options}
            placeholder="Select a Club"
            filterCards={this.filterTeamCards}
          />
        </div>
        <div className="ant-row">
          <div className="ant-col ant-col-2"></div>
          <div className="ant-col ant-col-20"></div>
          <div className="ant-col ant-col-2"></div>
        </div>
      </div>
    );
  }
}
export default TrasnfersSection;
