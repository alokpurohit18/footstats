import * as React from "react";
import "antd/dist/antd.css";
import scoresData from "../../../api/data/scoresData.json";
import ScoreCard from "../ScoreCard/ScoreCard.jsx";
import ScoreCardLarge from "../ScoreCardLarge/ScoreCardLarge.jsx";
import LeagueConversion from "../../../api/data/leagueConversion.json";

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
        if (this.cardInfo.league.split(".")[1] === "w") {
          if (this.cardInfo.league.split(".")[2] === undefined) {
            final_league_name = this.cardInfo.league.split(".")[0] + " Women";
          } else {
            final_league_name =
              this.cardInfo.league.split(".")[0] +
              " Women " +
              this.cardInfo.league.split(".")[2];
          }
        } else {
          if (this.cardInfo.league.split(".")[2] === undefined) {
            final_league_name =
              this.cardInfo.league.split(".")[0] +
              " " +
              this.cardInfo.league.split(".")[1];
          } else {
            final_league_name =
              this.cardInfo.league.split(".")[0] +
              " " +
              this.cardInfo.league.split(".")[1] +
              " " +
              this.cardInfo.league.split(".")[2];
          }
        }
      }
      final_league_name = this.capitalizeLeagueName(final_league_name);
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
