import * as React from "react";
import "antd/dist/antd.css";
import LoadAPI from "../../utils/LoadAPI";
import "./PlayersSection.scss";

class PlayersSection extends React.Component {
  sectionHeading;

  constructor(props) {
    super(props);
    this.sectionHeading = this.props.sectionHeading;
    this.state = {
      player: {},
      apiLoaded: false,
    };
  }

  setData = (player) => {
    this.setState({
      player: player,
      apiLoaded: true,
    });
  };

  render() {
    return (
      <div className="players-section-main">
        <h2>{this.sectionHeading}</h2>
        {this.state.apiLoaded ? null : (
          <LoadAPI url="/playerDetails" sourceLink={3} setData={this.setData} />
        )}
        <div className="player-card-main ant-row">
          <div className="real-overall-rating ant-col ant-col-6"></div>
          <div className="player-details ant-col ant-col-18">
            {Object.keys(this.state.player).length === 0 &&
            this.state.player.constructor === Object ? null : (
              <img
                alt="profile pic"
                src={this.state.player.personal_details.face_url}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default PlayersSection;
