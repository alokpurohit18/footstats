import * as React from "react";
import "antd/dist/antd.css";
import ScoresSection from "../ScoresSection/ScoresSection.jsx";
import scoresData from "../../scoresData.json";

class ScoresPage extends React.Component {
  render() {
    return (
      <div className="scores-page-main">
        <h2>Football Scores</h2>
        <div className="ant-row">
          <div className="ant-col ant-col-12">
            <ScoresSection
              scoreCardIsLarge={true}
              sectionHeading=""
              cardCount={Math.trunc(scoresData.length / 2)}
              cardStart="0"
            />
          </div>
          <div className="ant-col ant-col-12">
            <ScoresSection
              scoreCardIsLarge={true}
              sectionHeading=""
              cardCount={Math.trunc(scoresData.length / 2)}
              cardStart={Math.trunc(scoresData.length / 2)}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ScoresPage;
