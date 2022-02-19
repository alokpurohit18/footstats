import * as React from "react";
import "antd/dist/antd.css";

class AwardCard extends React.Component {
  loadPlayer = (playerObject) => {
    return (
      <div key={playerObject.Player} className="ant-col ant-col-8">
        <div className="player-name">
          <span>Name: </span>
          {playerObject.Player}
        </div>
        <div>
          <span>Rank: </span>
          {playerObject.Rank}
        </div>
        <div>
          <span>Club: </span>
          {playerObject.Club}
        </div>
        <div>
          <span>Nationality: </span>
          {playerObject.Nationality}
        </div>
        <div>
          <span>Points: </span>
          {playerObject.Points}
        </div>
        <div>
          <span>P1: </span>
          {playerObject.P1}
        </div>
        <div>
          <span>P2: </span>
          {playerObject.P2}
        </div>
        <div>
          <span>P3: </span>
          {playerObject.P3}
        </div>
        <div>
          <span>P4: </span>
          {playerObject.P4}
        </div>
        <div>
          <span>P5: </span>
          {playerObject.P5}
        </div>
        <div>
          <span>Votes: </span>
          {playerObject.Votes}
        </div>
        <div>
          <span>Rank Points: </span>
          {playerObject.RankPts}
        </div>
        <div>
          <span>Share: </span>
          {playerObject.Share}
        </div>
        <div>
          <span>Percent: </span>
          {playerObject.Percent}
        </div>
        <div>
          <span>Voted: </span>
          {playerObject.Voted}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="award-card-main">
        <h2>{this.props.year}</h2>
        <div className="standings ant-row">
          {this.props.cardInfo.map(this.loadPlayer)}
        </div>
      </div>
    );
  }
}
export default AwardCard;
