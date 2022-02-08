import * as React from "react";
import "antd/dist/antd.css";
import "./NewsCard.scss";
import LoadAPI from "../../../utils/LoadAPI";

class NewsCard extends React.Component {
  cardInfo;

  constructor(props) {
    super(props);
    this.cardInfo = this.props.cardInfo;
    this.state = {
      isClicked: false,
    };
  }

  loadLongDescription = () => {
    this.setState({
      isClicked: true,
    });
  };

  render() {
    return (
      <button
        className="news-card-main ant-row"
        onClick={this.loadLongDescription}
      >
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
        {this.state.isClicked ? (
          <LoadAPI
            url="/news_description"
            sourceLink={this.cardInfo.link}
            setData={null}
          />
        ) : null}
      </button>
    );
  }
}

export default NewsCard;
