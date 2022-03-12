import * as React from "react";
import "antd/dist/antd.css";

class TrasnferCard extends React.Component {
  cardInfo;

  constructor(props) {
    super(props);
    this.cardInfo = this.props.cardInfo;
  }

  loadFromTeam = () => {
    if (this.props.cardType === "in") {
      return this.cardInfo.counter_team_name === "Without Club"
        ? "Free Agent"
        : this.cardInfo.counter_team_name;
    } else {
      return this.props.homeTeam === "Without Club"
        ? "Free Agent"
        : this.props.homeTeam;
    }
  };

  loadToTeam = () => {
    if (this.props.cardType === "out") {
      return this.cardInfo.counter_team_name === "Without Club"
        ? "Free Agent"
        : this.cardInfo.counter_team_name;
    } else {
      return this.props.homeTeam === "Without Club"
        ? "Free Agent"
        : this.props.homeTeam;
    }
  };

  loadTransferFee = () => {
    let x = this.cardInfo.transfer_fee;
    if (x.includes("End of loan")) {
      return x.substring(0, 11) + ":\xa0" + x.substring(11, x.length);
    } else if (x.includes("Loan fee")) {
      if (x.includes("Th.")) {
        x = x.slice(0, -3) + "K";
      }
      return x.substring(0, 9) + "\xa0" + x.substring(9, x.length);
    } else if (x.includes("Th.")) {
      return x.slice(0, -3) + "K";
    } else {
      return x;
    }
  };

  render() {
    return (
      <div className="transfer-card-main">
        <h3 className="card-heading">{this.cardInfo.player_name}</h3>
        <div className="player-details">
          {" (Age: " +
            this.cardInfo.player_age +
            ") || (Position: " +
            this.cardInfo.player_pos +
            ")"}
        </div>
        <div className="transfer-details">
          {this.loadFromTeam() +
            "\xa0\xa0\xa0\xa0\xa0------>\xa0\xa0\xa0\xa0\xa0" +
            this.loadToTeam()}
        </div>
        <div className="transfer-fee">{this.loadTransferFee()}</div>
      </div>
    );
  }
}
export default TrasnferCard;
