import * as React from "react";
import "antd/dist/antd.css";
import ScoresSection from "../ScoresSection/ScoresSection.jsx";
import Menu from "../../common/Menu/Menu.jsx";
import scoresData from "../../../api/data/scoresData.json";
import LeagueConversion from "../../../api/data/leagueConversion.json";

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

  capitalizeLeagueName = (leagueName) => {
    var words = leagueName.split(" ");
    var CapitalizedWords = [];
    words.forEach((element) => {
      CapitalizedWords.push(
        element[0].toUpperCase() + element.slice(1, element.length)
      );
    });
    return CapitalizedWords.join(" ");
  };

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
        if (cardInfo.league.split(".")[1] === "w") {
          if (cardInfo.league.split(".")[2] === undefined) {
            final_league_name = cardInfo.league.split(".")[0] + " Women";
          } else {
            final_league_name =
              cardInfo.league.split(".")[0] +
              " Women " +
              cardInfo.league.split(".")[2];
          }
        } else {
          if (cardInfo.league.split(".")[2] === undefined) {
            final_league_name =
              cardInfo.league.split(".")[0] +
              " " +
              cardInfo.league.split(".")[1];
          } else {
            final_league_name =
              cardInfo.league.split(".")[0] +
              " " +
              cardInfo.league.split(".")[1] +
              " " +
              cardInfo.league.split(".")[2];
          }
        }
      }
      final_league_name = this.capitalizeLeagueName(final_league_name);
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
            filterCards={this.filterScoreCards}
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
