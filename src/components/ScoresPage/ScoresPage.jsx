import * as React from "react";
import "antd/dist/antd.css";
import NewsSection from "../NewsSection/NewsSection.jsx";
import ScoresSection from "../ScoresSection/ScoresSection.jsx";

class ScoresPage extends React.Component {
  render() {
    return (
      <div className="landing-page-main ant-row">
        <div className="news-section-container ant-col ant-col-8">
          <NewsSection cardCount="9" />
        </div>
        <div className="scores-section-container ant-col ant-col-8">
          <ScoresSection cardCount="10" />
        </div>
        <div className="prediction-section-container ant-col ant-col-8"></div>
      </div>
    );
  }
}
export default ScoresPage;
