import * as React from "react";
import "antd/dist/antd.css";

class MatchCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupFilter: "knockout",
    };
  }

  render() {
    return <div className="match-card-main"></div>;
  }
}
export default MatchCard;
