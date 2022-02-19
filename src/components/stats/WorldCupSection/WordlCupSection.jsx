import * as React from "react";
import "antd/dist/antd.css";
import MatchCard from "./MatchCard.jsx";
import Menu from "../../common/Menu/Menu";
import "./WorldCup.scss";

class WorldCupSection extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      { label: "Group A", value: "Group A" },
      { label: "Group B", value: "Group B" },
      { label: "Group C", value: "Group C" },
      { label: "Group D", value: "Group D" },
      { label: "Group E", value: "Group E" },
      { label: "Group F", value: "Group F" },
      { label: "Group G", value: "Group G" },
      { label: "Group H", value: "Group H" },
      { label: "Knockout", value: "Knockout" },
    ];
    this.state = {
      groupFilter: "Knockout",
    };
  }

  filterTeamCards = (selectedObject) => {
    this.setState({
      groupFilter: selectedObject.label,
    });
  };

  render() {
    return (
      <div className="world-cup-section-main">
        <h2>World Cup 2018</h2>
        <div className="world-cup-section-container ant-row">
          <div className="top-container ant-col ant-col-12">
            <div className="world-cup-logo">
              <img
                src="https://cloudinary.fifa.com/api/v1/picture/tournaments-sq-4/254645?tx=c_fill,g_auto,q_auto,w_150"
                alt="world cup logo"
              />
            </div>
            <div className="world-cup-header">
              <img
                src="https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/pogba.png?raw=true"
                alt="world cup header"
              />
            </div>
          </div>
          <div className="ant-col ant-col-1"></div>
          <div className="world-cup-stats ant-col ant-col-11">
            <div className="world-cup-scorers">
              <img
                src="https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/scorers.png?raw=true"
                alt="world cup scorers"
              />
            </div>
            <div className="world-cup-awards">
              <img
                src="https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/awards.png?raw=true"
                alt="world cup awards"
              />
            </div>
          </div>
          <div className="menu-container">
            <Menu
              options={this.options}
              placeholder="Select a Group"
              filterCards={this.filtergroupCards}
            />
          </div>
          <MatchCard groupFilter={this.state.groupFilter} />
        </div>
      </div>
    );
  }
}
export default WorldCupSection;
