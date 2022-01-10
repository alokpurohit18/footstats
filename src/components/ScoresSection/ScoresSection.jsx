import * as React from "react";
import "antd/dist/antd.css";
import scoresData from "../../scoresData.json";
import ScoreCard from "../ScoreCard/ScoreCard.jsx";
import "./ScoresSection.scss";

class ScoresSection extends React.Component {
  cardCount;
  cardDetailsArray;

  constructor(props) {
    super(props);
    this.cardCount = this.props.cardCount;
    this.cardDetailsArray = [];
  }

  createScoreCard = (cardInfo) => {
    console.log(cardInfo);
    return <ScoreCard key={cardInfo.key} cardInfo={cardInfo} />;
  };

  choseScoreItems = () => {
    let counter = 0;
    while (counter < this.cardCount) {
      this.cardDetailsArray.push(scoresData[counter]);
      counter++;
    }
  };

  render() {
    return (
      <div className="scores-section-main">
        <h2>Latest Fixtures</h2>
        {this.choseScoreItems()}
        {this.cardDetailsArray.map(this.createScoreCard)}
      </div>
    );
  }
}
export default ScoresSection;
