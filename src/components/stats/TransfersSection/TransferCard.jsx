import * as React from "react";
import "antd/dist/antd.css";

class TrasnferCard extends React.Component {
  cardInfo;

  constructor(props) {
    super(props);
    this.cardInfo = this.props.cardInfo;
  }

  render() {
    return (
      <div className="transfer-card-main">
        <h3 className="card-heading">
          {this.cardInfo.player_name +
            " (Age: " +
            this.cardInfo.player_age +
            ")"}
        </h3>
      </div>
    );
  }
}
export default TrasnferCard;
