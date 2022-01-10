import * as React from "react";
import "antd/dist/antd.css";
import "./NewsCard.scss";

class NewsCard extends React.Component {
  cardInfo;

  constructor(props) {
    super(props);
    this.cardInfo = this.props.cardInfo;
  }

  render() {
    return (
      <div className="news-card-main ant-row">
        <img
          className="news-image ant-col ant-col-12"
          alt="news card media"
          src={this.cardInfo.imageSource}
        />
        <div className="news-detail ant-col ant-col-12">
          <h3 className="card-title">{this.cardInfo.title}</h3>
          <div className="card-description">
            {this.cardInfo.shortDescription}
          </div>
        </div>
      </div>
    );
  }
}
export default NewsCard;
