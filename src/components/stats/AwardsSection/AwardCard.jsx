import * as React from "react";
import "antd/dist/antd.css";

class AwardCard extends React.Component {
  render() {
    return (
      <div className="award-card-main">
        <h2>{this.props.year}</h2>
        <div className="standings ant-row">
          <div className="ant-col ant-col-8">
            {this.props.cardInfo[0].Player}
          </div>
          <div className="ant-col ant-col-8">
            {this.props.cardInfo[1].Player}
          </div>
          <div className="ant-col ant-col-8">
            {this.props.cardInfo[2].Player}
          </div>
        </div>
      </div>
    );
  }
}
export default AwardCard;
