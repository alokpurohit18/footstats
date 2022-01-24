import * as React from "react";
import "antd/dist/antd.css";
import ScoresSection from "../ScoresSection/ScoresSection.jsx";
import Menu from "../Menu/Menu.jsx";
import scoresData from "../../data/scoresData.json";
import LeagueConversion from "../../data/leagueConversion.json";

class ScoresPage extends React.Component {
  leagueNames;
  leagueKeys;
  options;

  constructor(props) {
    super(props);
    this.leagueNames = ["All"];
    this.leagueKeys = ["all"];
    this.options = [];
    this.state = {
      leagueFilter: "all",
    };
  }

  loadLeagueName = (cardInfo) => {
    this.leagueKeys.push(cardInfo.league);
    if (LeagueConversion[0][cardInfo.league] === undefined) {
      let half_league_name = "";
      let final_league_name = "";
      if (cardInfo.league.charAt(4) === "1") {
        half_league_name = " League";
        final_league_name = cardInfo.league.split(".")[0] + half_league_name;
      } else if (cardInfo.league.charAt(4) === "2") {
        half_league_name = " League 2";
        final_league_name = cardInfo.league.split(".")[0] + half_league_name;
      } else if (cardInfo.league.charAt(4) === "3") {
        half_league_name = " League 3";
        final_league_name = cardInfo.league.split(".")[0] + half_league_name;
      } else if (cardInfo.league.charAt(4) === "4") {
        half_league_name = " League 4";
        final_league_name = cardInfo.league.split(".")[0] + half_league_name;
      } else {
        half_league_name = cardInfo.league.split(".")[1];
        half_league_name =
          " " +
          half_league_name.charAt(0).toUpperCase() +
          half_league_name.slice(1);
        final_league_name = cardInfo.league.split(".")[0] + half_league_name;
      }

      final_league_name =
        final_league_name.charAt(0).toUpperCase() + final_league_name.slice(1);
      this.leagueNames.push(final_league_name);
    } else {
      this.leagueNames.push(LeagueConversion[0][cardInfo.league]);
    }
  };

  reduceLeagueNames = () => {
    this.options = [];
    this.leagueNames = this.leagueNames.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

    this.leagueKeys = this.leagueKeys.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

    for (let i = 0; i < this.leagueNames.length; i++) {
      this.options.push({
        value: this.leagueKeys[i],
        label: this.leagueNames[i],
      });
    }
  };

  filterScoreCards = (selectedObject) => {
    this.setState({
      leagueFilter: selectedObject.value,
    });
  };

  loadScoresSection = () => {
    return (
      <ScoresSection
        scoreCardIsLarge={true}
        sectionHeading=""
        cardCount={scoresData.length}
        cardStart="0"
        leagueFilter={this.state.leagueFilter}
      />
    );
  };

  render() {
    return (
      <div className="scores-page-main">
        <h2>Football Scores</h2>
        <div className="menu-container">
          {scoresData.map(this.loadLeagueName)}
          {this.reduceLeagueNames()}
          <Menu
            options={this.options}
            placeholder="Select a League"
            filterScoreCards={this.filterScoreCards}
          />
        </div>
        <div className="ant-row">
          <div className="ant-col ant-col-2"></div>
          <div className="ant-col ant-col-20">{this.loadScoresSection()}</div>
          <div className="ant-col ant-col-2"></div>
        </div>
      </div>
    );
  }
}
export default ScoresPage;
