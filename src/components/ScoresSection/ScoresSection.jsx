import * as React from "react";
import "antd/dist/antd.css";
import scoresData from "../../scoresData.json";
import ScoreCard from "../ScoreCard/ScoreCard.jsx";
import ScoreCardLarge from "../ScoreCardLarge/ScoreCardLarge.jsx";

class ScoresSection extends React.Component {
  cardCount;
  cardDetailsArray;
  sectionHeading;
  cardStart;

  constructor(props) {
    super(props);
    this.cardCount = this.props.cardCount;
    this.sectionHeading = this.props.sectionHeading;
    this.cardStart = this.props.cardStart;
    this.cardDetailsArray = [];
  }

  createScoreCard = (cardInfo) => {
    if (this.props.scoreCardIsLarge)
      return <ScoreCardLarge key={cardInfo.key} cardInfo={cardInfo} />;
    else return <ScoreCard key={cardInfo.key} cardInfo={cardInfo} />;
  };

  choseScoreItems = () => {
    let counter = 0;
    let start = this.cardStart;
    while (counter < this.cardCount) {
      this.cardDetailsArray.push(scoresData[start]);
      counter++;
      start++;
    }
  };

  render() {
    return (
      <div className="scores-section-main">
        <h2>{this.sectionHeading}</h2>
        {this.choseScoreItems()}
        {this.cardDetailsArray.map(this.createScoreCard)}
      </div>
    );
  } 
}
export default ScoresSection;
