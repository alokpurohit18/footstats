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
    this.dataArray = [
      {
        label: "Group A",
        value:
          "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/a.png?raw=true",
      },
      {
        label: "Group B",
        value:
          "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/b.png?raw=true",
      },
      {
        label: "Group C",
        value:
          "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/c.png?raw=true",
      },
      {
        label: "Group D",
        value:
          "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/d.png?raw=true",
      },
      {
        label: "Group E",
        value:
          "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/e.png?raw=true",
      },
      {
        label: "Group F",
        value:
          "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/f.png?raw=true",
      },
      {
        label: "Group G",
        value:
          "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/g.png?raw=true",
      },
      {
        label: "Group H",
        value:
          "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/h.png?raw=true",
      },
      {
        label: "Knockout",
        value:
          "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/Knockout.png?raw=true",
      },
    ];
    this.state = {
      groupFilter: "Knockout",
    };
  }

  filterGroupCards = (selectedObject) => {
    this.setState({
      groupFilter: selectedObject.label,
    });
  };

  render() {
    return (
      <div className="world-cup-section-main">
        <h2>World Cup 2018</h2>
        <div className="world-cup-section-container">
          <div className="ant-row">
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
          </div>
          <div className="menu-container ant-row">
            <Menu
              options={this.options}
              placeholder="Select a Group"
              filterCards={this.filterGroupCards}
            />
          </div>
          <div className="ant-row">
            <MatchCard
              dataArray={this.dataArray}
              groupFilter={this.state.groupFilter}
            />
          </div>
          <div className="world-cup-footer ant-row">
            <img
              className="ant-col ant-col-12"
              alt="world cup footer"
              src="https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/sponsors.png?raw=true"
            />
            <div className="ant-col ant-col-1"></div>
            <iframe
              className="video-player ant-col ant-col-11"
              src="https://www.youtube.com/embed/UUM3FuNVYho"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}
export default WorldCupSection;
