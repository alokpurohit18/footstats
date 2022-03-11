import * as React from "react";
import "antd/dist/antd.css";
import "../coaches/CoachesCenter.scss";

class MarketValue extends React.Component {
  render() {
    return (
      <div className="market-value-main">
        <h2>Market Value Prediction Model</h2>
        <img
          alt="market value model"
          src="https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/market_value.png?raw=true"
        />
      </div>
    );
  }
}
export default MarketValue;
