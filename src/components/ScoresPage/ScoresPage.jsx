import * as React from "react";
import "antd/dist/antd.css";
import ScoresSection from "../ScoresSection/ScoresSection.jsx";
import Menu from "../Menu/Menu.jsx";
import scoresData from "../../scoresData.json";

class ScoresPage extends React.Component {
  render() {
    return (
      <div className="scores-page-main">
        <h2>Football Scores</h2>
        <Menu />
        <div className="ant-row">
          <div className="ant-col ant-col-2"></div>
          <div className="ant-col ant-col-20">
            <ScoresSection
              scoreCardIsLarge={true}
              sectionHeading=""
              cardCount={scoresData.length}
              cardStart="0"
            />
          </div>
          <div className="ant-col ant-col-2"></div>
        </div>
      </div>
    );
  }
}
export default ScoresPage;
