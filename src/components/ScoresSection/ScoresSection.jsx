import * as React from "react";
import "antd/dist/antd.css";
import scoresData from "../../scoresData.json";
import ScoreCard from "../ScoreCard/ScoreCard.jsx";
import ScoreCardLarge from "../ScoreCardLarge/ScoreCardLarge.jsx";
import LeagueConversion from "../../leagueConversion.json";

class ScoresSection extends React.Component {
  cardCount;
  cardDetailsArray;
  sectionHeading;
  cardStart;
  cardInfo;

  constructor(props) {
    super(props);
    this.cardCount = this.props.cardCount;
    this.sectionHeading = this.props.sectionHeading;
    this.cardStart = this.props.cardStart;
    this.cardDetailsArray = [];
  }

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

  createScoreCard = (cardInfo) => {
    this.cardInfo = cardInfo;
    if (this.props.scoreCardIsLarge)
      return (
        <ScoreCardLarge
          loadLeagueName={this.loadLeagueName()}
          key={cardInfo.key}
          cardInfo={cardInfo}
        />
      );
    else
      return (
        <ScoreCard
          loadLeagueName={this.loadLeagueName()}
          key={cardInfo.key}
          cardInfo={cardInfo}
        />
      );
  };

  choseScoreItems = (leagueFilter) => {
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
  };

  render() {
    return (
      <div className="scores-section-main">
        <h2>{this.sectionHeading}</h2>
        {this.choseScoreItems(this.props.leagueFilter)}
        {this.cardDetailsArray.map(this.createScoreCard)}
      </div>
    );
  }
}
export default ScoresSection;
