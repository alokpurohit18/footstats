import * as React from "react";
import "antd/dist/antd.css";
import LoadAPI from "../../utils/LoadAPI";
import "./PlayersSection.scss";

class PlayersSection extends React.Component {
  sectionHeading;
  player;

  constructor(props) {
    super(props);
    this.sectionHeading = this.props.sectionHeading;
  }

  setData = (player) => {
    this.player = player;
    console.log(this.player);
  };

  render() {
    return (
      <div className="players-section-main">
        <h2>{this.sectionHeading}</h2>
        <LoadAPI url="/playerDetails" sourceLink="9" setData={this.setData} />
        <div className="player-card-main ant-row"></div>
      </div>
    );
  }
}
export default PlayersSection;
