import * as React from "react";
import "antd/dist/antd.css";
import newsData from "../../../api/data/newsData.json";
import NewsCard from "../NewsCard/NewsCard.jsx";

class NewsSection extends React.Component {
  cardCount;
  cardDetailsArray;
  sectionHeading;
  cardStart;

  constructor(props) {
    super(props);
    this.cardCount = this.props.cardCount;
    this.sectionHeading = this.props.sectionHeading;
    this.cardDetailsArray = [];
    this.cardStart = this.props.cardStart;
  }

  createNewsCard = (cardInfo) => {
    return <NewsCard key={cardInfo.key} cardInfo={cardInfo} />;
  };

  choseNewsItems = () => {
    let counter = 0;
    let start = this.cardStart;
    while (counter < this.cardCount) {
      this.cardDetailsArray.push(newsData[start]);
      counter++;
      start++;
    }
  };

  render() {
    return (
      <div className="news-section-main">
        <h2>{this.sectionHeading}</h2>
        {this.choseNewsItems()}
        {this.cardDetailsArray.map(this.createNewsCard)}
      </div>
    );
  }
}
export default NewsSection;
