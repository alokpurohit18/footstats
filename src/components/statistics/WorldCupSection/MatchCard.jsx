import * as React from "react";
import "antd/dist/antd.css";

class MatchCard extends React.Component {
  loadsrc = () => {
    for (let i = 0; i < this.props.dataArray.length; i++) {
      if (this.props.dataArray[i].label === this.props.groupFilter) {
        return this.props.dataArray[i].value;
      }
    }
  };

  render() {
    return (
      <div className="match-card-main">
        <img alt="match card" src={this.loadsrc()} />
      </div>
    );
  }
}
export default MatchCard;
