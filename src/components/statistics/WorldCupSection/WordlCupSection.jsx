import * as React from "react";
import "antd/dist/antd.css";
import MatchCard from "./MatchCard.jsx";
import Menu from "../../common/Menu/Menu";
import "./WorldCup.scss";

class WorldCupSection extends React.Component {
  constructor(props) {
    super(props);
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
        <h2>{this.props.sectionHeading}</h2>
        <div className="world-cup-section-container">
          <div className="ant-row">
            <div className="top-container ant-col ant-col-12">
              <div className="world-cup-logo">
                <img src={this.props.src[0]} alt="world cup logo" />
              </div>
              <div className="world-cup-header">
                <img src={this.props.src[1]} alt="world cup header" />
              </div>
            </div>
            <div className="ant-col ant-col-1"></div>
            <div className="world-cup-stats ant-col ant-col-11">
              <div className="world-cup-scorers">
                <img src={this.props.src[2]} alt="world cup scorers" />
              </div>
              <div className="world-cup-awards">
                <img src={this.props.src[3]} alt="world cup awards" />
              </div>
            </div>
          </div>
          <div className="menu-container ant-row">
            <Menu
              options={this.props.options}
              placeholder="Select a Group"
              filterCards={this.filterGroupCards}
            />
          </div>
          <div className="ant-row">
            <MatchCard
              dataArray={this.props.dataArray}
              groupFilter={this.state.groupFilter}
            />
          </div>
          <div className="world-cup-footer ant-row">
            <img
              className="ant-col ant-col-12"
              alt="world cup footer"
              src={this.props.src[4]}
            />
            <div className="ant-col ant-col-1"></div>
            <iframe
              className="video-player ant-col ant-col-11"
              src={this.props.src[5]}
              title="YouTube video player"
              frameBorder="0"
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
