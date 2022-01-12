import * as React from "react";
import "antd/dist/antd.css";
import newsData from "../../newsData.json";
import NewsCard from "../NewsCard/NewsCard.jsx";

class NewsSection extends React.Component {
  cardCount;
  cardDetailsArray;

  constructor(props) {
    super(props);
    this.cardCount = this.props.cardCount;
    this.cardDetailsArray = [];
  }

  createNewsCard = (cardInfo) => {
    return <NewsCard key={cardInfo.key} cardInfo={cardInfo} />;
  };

  choseNewsItems = () => {
    let counter = 0;
    while (counter < this.cardCount) {
      this.cardDetailsArray.push(newsData[counter]);
      counter++;
    }
  };

  render() {
    return (
      <div className="news-section-main">
        <h2>Latest News</h2>
        {this.choseNewsItems()}
        {this.cardDetailsArray.map(this.createNewsCard)}
      </div>
    );
  }
}
export default NewsSection;
