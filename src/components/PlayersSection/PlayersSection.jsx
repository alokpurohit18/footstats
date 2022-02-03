import * as React from "react";
import "antd/dist/antd.css";
import scoresData from "../../api/data/scoresData.json";
import ScoreCard from "../ScoreCard/ScoreCard.jsx";
import ScoreCardLarge from "../ScoreCardLarge/ScoreCardLarge.jsx";
import playerNames from "../../api/data/playerNames.json";
import Player from "../../api/data/leagueConversion.json";
import LoadAPI from "../../utils/LoadAPI";
import Menu from "../Menu/Menu.jsx";

class PlayersSection extends React.Component {
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
        <div className="dropdown-menu-container">
          <LoadAPI url="/fifa22" sourceLink="9" />
        </div>
      </div>
    );
  }
}
export default PlayersSection;
