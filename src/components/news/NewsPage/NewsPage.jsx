import * as React from "react";
import "antd/dist/antd.css";
import newsData from "../../../api/data/newsData.json";
import NewsSection from "../NewsSection/NewsSection.jsx";

class NewsPage extends React.Component {
  render() {
    return (
      <div className="news-page-main">
        <h2>Football News</h2>
        <div className="ant-row">
          <div className="ant-col ant-col-12">
            <NewsSection
              sectionHeading=""
              cardCount={Math.trunc(newsData.length / 2)}
              cardStart="0"
            />
          </div>
          <div className="ant-col ant-col-12">
            <NewsSection
              sectionHeading=""
              cardCount={Math.trunc(newsData.length / 2)}
              cardStart={Math.trunc(newsData.length / 2)}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default NewsPage;
